import { getCollection } from 'astro:content';
import { site } from '../config/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
  const items = posts
    .map((p) => `<item><title>${esc(p.data.title)}</title><link>${site.url}/blog/${p.id}/</link><guid>${site.url}/blog/${p.id}/</guid><description>${esc(p.data.description)}</description><pubDate>${p.data.date.toUTCString()}</pubDate></item>`)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${site.name} Blog</title><link>${site.url}/blog/</link><description>Guides on GPS telematics and fleet management.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
