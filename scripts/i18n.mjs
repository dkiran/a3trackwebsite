// Post-build translation: for every non-English language, copy each translatable page from dist/ into
// dist/<lang>/, replacing text with the dictionary in src/i18n/<lang>.json. Strings with no translation are
// left in English and listed in src/i18n/<lang>.missing.json so they can be filled in.
import fs from 'node:fs';
import path from 'node:path';
import { parse, NodeType } from 'node-html-parser';
import { locales, defaultLocale, isTranslatable } from '../src/i18n/config.mjs';

const DIST = 'dist';
const SITE = 'https://veyro.com';
const SKIP_TAGS = new Set(['script', 'style', 'code', 'pre', 'noscript']);
const ATTRS = ['aria-label', 'placeholder', 'alt', 'title'];
const META = ['description', 'og:title', 'og:description', 'twitter:title', 'twitter:description'];

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
const encode = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const encodeAttr = (s) => encode(s).replace(/"/g, '&quot;');
const worthTranslating = (s) => /\p{L}{2,}/u.test(s);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function makeTranslator(dict, missing) {
  const patterns = Object.keys(dict).filter((k) => k.includes('{}')).map((k) => ({
    re: new RegExp('^' + k.split('{}').map((x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('(.+)') + '$'),
    out: dict[k],
  }));
  const tr = (text, record = true) => {
    const key = text.replace(/\s+/g, ' ').trim();
    if (!key || !worthTranslating(key)) return null;
    if (dict[key] !== undefined) return dict[key] || null;
    for (const p of patterns) {
      const m = key.match(p.re);
      if (m) { let i = 1; return p.out.replace(/\{\}/g, () => tr(m[i], false) ?? m[i++ ]); }
    }
    if (record) missing.add(key);
    return null;
  };
  return tr;
}

function translateJson(value, tr) {
  if (typeof value === 'string') return tr(value, false) ?? value;
  if (Array.isArray(value)) return value.map((v) => translateJson(v, tr));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, ['@type', '@context', '@id', 'url', 'item', 'logo', 'image', 'email', 'telephone'].includes(k) ? v : translateJson(v, tr)]));
  return value;
}

function translatePage(html, pagePath, lang, tr) {
  const root = parse(html, { comment: true, blockTextElements: { script: true, style: true, noscript: true, pre: true } });
  const prefix = `/${lang.code}`;

  const visit = (node) => {
    if (node.nodeType === NodeType.TEXT_NODE) {
      const raw = node.rawText;
      const t = tr(decode(raw));
      if (t) node.rawText = raw.match(/^\s*/)[0] + encode(t) + raw.match(/\s*$/)[0];
      return;
    }
    if (node.nodeType !== NodeType.ELEMENT_NODE) return;
    const tag = node.rawTagName?.toLowerCase();
    if (SKIP_TAGS.has(tag) || node.getAttribute?.('translate') === 'no') return;
    for (const a of ATTRS) {
      const v = node.getAttribute(a);
      if (v) { const t = tr(decode(v)); if (t) node.setAttribute(a, encodeAttr(t)); }
    }
    node.childNodes.forEach(visit);
  };
  visit(root.querySelector('body'));

  // <head>
  const title = root.querySelector('title');
  if (title) { const t = tr(decode(title.rawText)); if (t) title.set_content(encode(t)); }
  root.querySelectorAll('meta').forEach((m) => {
    const name = m.getAttribute('name') || m.getAttribute('property');
    if (META.includes(name)) { const t = tr(decode(m.getAttribute('content') || '')); if (t) m.setAttribute('content', encodeAttr(t)); }
    if (name === 'og:url') m.setAttribute('content', SITE + prefix + pagePath);
    if (name === 'og:locale') m.setAttribute('content', lang.ogLocale);
  });
  root.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE + prefix + pagePath);
  root.querySelector('html')?.setAttribute('lang', lang.code);
  root.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
    try { s.set_content(JSON.stringify(translateJson(JSON.parse(s.rawText), tr))); } catch { /* leave as is */ }
  });

  // Internal links: keep visitors inside this language where a translated page exists.
  root.querySelectorAll('a[href^="/"]').forEach((a) => {
    const href = a.getAttribute('href');
    const target = a.getAttribute('data-lang');
    if (target) { a.setAttribute('href', (target === defaultLocale ? '' : `/${target}`) + pagePath); return; }
    const p = href.split('#')[0];
    if (/\.[a-z0-9]+$/i.test(p) || p.startsWith('/_astro') || p.startsWith('/api') || !isTranslatable(p)) return;
    a.setAttribute('href', prefix + href);
  });
  root.querySelectorAll('[data-lang]').forEach((a) => a.classList.toggle('is-current', a.getAttribute('data-lang') === lang.code));
  return root.toString();
}

const pages = walk(DIST)
  .map((f) => ({ file: f, url: '/' + path.relative(DIST, f).replace(/\\/g, '/').replace(/index\.html$/, '') }))
  .filter((p) => !locales.some((l) => l.code !== defaultLocale && p.url.startsWith(`/${l.code}/`)) && isTranslatable(p.url) && p.url.endsWith('/'));

const sitemapEntries = [];
for (const lang of locales.filter((l) => l.code !== defaultLocale)) {
  const dictFile = `src/i18n/${lang.code}.json`;
  const dict = fs.existsSync(dictFile) ? JSON.parse(fs.readFileSync(dictFile, 'utf8')) : {};
  const missing = new Set();
  const tr = makeTranslator(dict, missing);
  for (const p of pages) {
    const out = path.join(DIST, lang.code, p.url, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, translatePage(fs.readFileSync(p.file, 'utf8'), p.url, lang, tr));
    if (!/thank-you/.test(p.url)) sitemapEntries.push(`${SITE}/${lang.code}${p.url}`);
  }
  const missFile = `src/i18n/${lang.code}.missing.json`;
  if (missing.size) fs.writeFileSync(missFile, JSON.stringify(Object.fromEntries([...missing].map((k) => [k, ''])), null, 1));
  else if (fs.existsSync(missFile)) fs.rmSync(missFile);
  console.log(`[i18n] ${lang.code}: ${pages.length} pages, ${Object.keys(dict).length} dictionary entries, ${missing.size} strings not translated${missing.size ? ` (see ${missFile})` : ''}`);
}

// Add the translated pages to the sitemap.
const sm = path.join(DIST, 'sitemap-0.xml');
if (fs.existsSync(sm) && sitemapEntries.length) {
  const xml = fs.readFileSync(sm, 'utf8');
  const extra = sitemapEntries.map((u) => `<url><loc>${u}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`).join('');
  fs.writeFileSync(sm, xml.replace('</urlset>', extra + '</urlset>'));
}
