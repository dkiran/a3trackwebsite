import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { solutions } from '../data/solutions';
import { industries } from '../data/industries';
import { platformPages } from '../data/platform';
import { faqGroups } from '../data/faqs';
import { glossary } from '../data/glossary';

// llms-full.txt — the site's main content as one plain-text (Markdown) file, so AI assistants can read
// everything about Veyro in a single request. Generated from the same data as the pages.
export async function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const qa = (items: { q: string; a: string }[]) => items.map((f) => `**${f.q}**\n${f.a}`).join('\n\n');
  const list = (items: { title: string; text: string }[]) => items.map((i) => `- **${i.title}:** ${i.text}`).join('\n');
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
  const seen = new Set<string>();
  const faqs = faqGroups.flatMap((g) => g.items).filter((f) => !seen.has(f.q) && seen.add(f.q));

  const out = [
    `# ${site.name}: full site content`,
    `> ${site.description} Tagline: ${site.tagline} Website: ${site.url}`,
    `Contact: ${site.salesEmail}, ${site.phone}. Request a demo: ${u('/contact/')}. Pricing: ${u('/pricing/')}.`,
    `## Frequently asked questions\n\n${qa(faqs)}`,
    `## Solutions`,
    ...solutions.map((s) => [
      `### ${s.name}\nURL: ${u(`/solutions/${s.slug}/`)}\n\n${s.lead}`,
      `**${s.definition.q}**\n${s.definition.a}`,
      `Capabilities:\n${list(s.features)}`,
      `Outcomes:\n${list(s.outcomes)}`,
      qa(s.faqs),
    ].join('\n\n')),
    `## Platform`,
    ...platformPages.map((p) => [
      `### ${p.name}\nURL: ${u(`/platform/${p.slug}/`)}\n\n${p.lead}`,
      `**${p.definition.q}**\n${p.definition.a}`,
      ...p.sections.map((sec) => `#### ${sec.title}\n${sec.intro}\n\n${list(sec.items)}`),
      qa(p.faqs),
    ].join('\n\n')),
    `## Industries`,
    ...industries.map((i) => [
      `### ${i.name}\nURL: ${u(`/industries/${i.slug}/`)}\n\n${i.lead}`,
      `Challenges:\n${list(i.challenges)}`,
      `How Veyro helps:\n${list(i.capabilities)}`,
      `Use cases: ${i.useCases.join('; ')}.`,
      qa(i.faqs),
    ].join('\n\n')),
    `## Guides`,
    ...posts.map((p) => `### ${p.data.title}\nURL: ${u(`/blog/${p.id}/`)}\n\n${(p.body ?? '').trim()}`),
    `## Glossary\n\n${glossary.map((t) => `- **${t.term}:** ${t.def}`).join('\n')}`,
  ].join('\n\n');

  return new Response(out + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
