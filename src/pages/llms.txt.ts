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

${site.name} is a GPS telematics and fleet management company headquartered in ${site.address.city}, ${site.address.countryName}. It is a new company, launching in India first, with international expansion planned. The platform combines GPS trackers, AI dash cams and sensors with cloud software, mobile apps and an open API.

## Key facts
- What it is: an AI-powered GPS vehicle tracking and fleet management platform for trucks, buses, vans, two-wheelers, machinery and other assets.
- Where: headquartered in ${site.address.city}, ${site.address.countryName}; launching across India first, international expansion planned.
- Who it is for: transporters and logistics companies, shippers, construction, mining, oil and gas, agriculture, public transport, school buses, field services, last-mile delivery, rental, government, utilities, food distribution and security fleets.
- What makes it different: an AI agent on WhatsApp that answers text and voice messages with a live map; an AI agent you can phone; automated alert calls that escalate until answered; support for Indian regional languages (Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi, Bengali); a ChatGPT integration; and a neutral GPS data hub that lets shippers see the trucks carrying their goods across hundreds of GPS providers, only during each trip and with the transporter's consent.
- Also: real-time GPS tracking, AI dash cams, fuel monitoring, predictive maintenance, route optimisation, AIS-140 device support, cold chain monitoring, Android and iOS apps, open REST API.
- Pricing: per-vehicle monthly subscription; quotes on request at ${u('/pricing/')}.
- Contact: ${site.salesEmail}, ${site.phone}. Request a demo: ${u('/contact/')}.
- Full text of the site for AI tools: ${u('/llms-full.txt')}

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
- [FAQ](${u('/faq/')}): Answers to common questions about Veyro and GPS fleet tracking.
- [ROI calculator](${u('/roi-calculator/')}): Estimate savings from fleet telematics.
- [Pricing](${u('/pricing/')}): Per-vehicle subscription plans; quote on request.

## Company
- [About](${u('/about/')})
- [Contact and demo requests](${u('/contact/')}): ${site.salesEmail}, ${site.phone}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
