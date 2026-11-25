// Tell Bing (and the other IndexNow engines: Yandex, Seznam, Naver) that the site's pages have changed,
// so AI assistants that search the web through them, such as ChatGPT search and Copilot, see updates sooner.
// Run after publishing: node scripts/indexnow.mjs   (deploy/update-site.sh does this automatically)
import fs from 'node:fs';

const site = fs.readFileSync('src/config/site.ts', 'utf8');
const key = site.match(/indexNowKey:\s*'([0-9a-f]{32})'/)?.[1];
const host = site.match(/url:\s*'https:\/\/([^']+)'/)?.[1];
if (!key || !host) { console.log('[indexnow] no key or site URL configured, skipping'); process.exit(0); }

const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// Only ping once the real domain serves this build (the key file must be reachable).
try {
  const check = await fetch(`https://${host}/${key}.txt`, { signal: AbortSignal.timeout(8000) });
  if (!check.ok || (await check.text()).trim() !== key) throw new Error(`key file returned ${check.status}`);
} catch (e) {
  console.log(`[indexnow] https://${host} is not serving this build yet (${e.message}); skipping`);
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`[indexnow] submitted ${urlList.length} URLs: HTTP ${res.status}`);
