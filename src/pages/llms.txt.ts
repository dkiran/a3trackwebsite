import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { solutions } from '../data/solutions';
import { industries } from '../data/industries';
import { platformPages } from '../data/platform';

// llms.txt — a concise, machine-readable summary of the site for AI assistants and answer engines.
export async function GET() {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
  const u = (p: string) => `${site.url}${p}`;
  const body = `# ${site.name}

> ${site.description} Tagline: ${site.tagline}

${site.name} is a GPS telematics and fleet management company headquartered in ${site.address.city}, ${site.address.countryName}, serving fleets in Bharat and expanding worldwide. The platform combines GPS trackers, AI dash cams and sensors with cloud software, mobile apps and an open API.

## Solutions
${solutions.map((s) => `- [${s.name}](${u(`/solutions/${s.slug}/`)}): ${s.short}`).join('\n')}

## Industries
${industries.map((s) => `- [${s.name}](${u(`/industries/${s.slug}/`)}): ${s.short}`).join('\n')}

## Platform
- [Platform overview](${u('/platform/')}): One connected cloud for vehicles, drivers and assets.
${platformPages.map((p) => `- [${p.name}](${u(`/platform/${p.slug}/`)}): ${p.lead}`).join('\n')}

## Guides
${posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.id}/`)}): ${p.data.description}`).join('\n')}

## Reference
- [Telematics glossary](${u('/glossary/')}): Definitions of GPS, telematics and fleet management terms.
- [FAQ](${u('/faq/')}): Answers to common questions about A3Track and GPS fleet tracking.
- [ROI calculator](${u('/roi-calculator/')}): Estimate savings from fleet telematics.
- [Pricing](${u('/pricing/')}): Per-vehicle subscription plans; quote on request.

## Company
- [About](${u('/about/')})
- [Contact and demo requests](${u('/contact/')}): ${site.salesEmail}, ${site.phone}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
