import { site } from './config/site';

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (name: string, description: string, path: string, serviceType = 'Fleet telematics') => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  serviceType,
  url: new URL(path, site.url).href,
  provider: { '@id': `${site.url}/#organization` },
  areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Place', name: 'Worldwide' }],
});
