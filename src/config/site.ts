// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for company details.
// ⚠ Everything marked DUMMY is placeholder data — replace before launch.
// ─────────────────────────────────────────────────────────────────────────
export const site = {
  name: 'A3Track',
  legalName: 'A3Track Technologies Pvt. Ltd.', // DUMMY
  url: 'https://a3track.com',
  tagline: 'Move Smarter.',
  description:
    'A3Track is an AI-powered GPS telematics and fleet intelligence platform. Track vehicles and assets in real time, improve driver safety, cut fuel costs and automate compliance.',
  email: 'hello@a3track.com', // DUMMY
  salesEmail: 'sales@a3track.com', // DUMMY
  supportEmail: 'support@a3track.com', // DUMMY
  phone: '+91 80 0000 0000', // DUMMY
  phoneHref: '+918000000000', // DUMMY
  address: {
    // DUMMY
    street: 'Level 3, Example Tech Park, Outer Ring Road',
    city: 'Bengaluru',
    region: 'Karnataka',
    postalCode: '560103',
    country: 'IN',
    countryName: 'India',
  },
  social: {
    // DUMMY — replace with real profiles (used in Organization schema "sameAs")
    linkedin: 'https://www.linkedin.com/company/a3track',
    x: 'https://x.com/a3track',
    youtube: 'https://www.youtube.com/@a3track',
  },
  // Paste the Google Search Console HTML-tag verification code here (content value only).
  googleSiteVerification: '',
  bingSiteVerification: '',
  // Endpoint the demo form posts to (proxied by nginx to the mail service in /server).
  formEndpoint: '/api/demo',
};

export const nav = {
  platform: [
    { href: '/platform/', label: 'Platform overview', desc: 'One connected operations cloud' },
    { href: '/platform/ai-fleet-intelligence/', label: 'AI fleet intelligence', desc: 'Predict, prioritise, automate' },
    { href: '/platform/hardware/', label: 'Hardware & devices', desc: 'Trackers, dash cams, sensors' },
    { href: '/platform/integrations/', label: 'Integrations & API', desc: 'Connect ERP, TMS and more' },
    { href: '/platform/security/', label: 'Security & privacy', desc: 'Enterprise-grade protection' },
  ],
  resources: [
    { href: '/blog/', label: 'Blog', desc: 'Guides for fleet leaders' },
    { href: '/glossary/', label: 'Telematics glossary', desc: 'Every term, plainly explained' },
    { href: '/roi-calculator/', label: 'ROI calculator', desc: 'Estimate your savings' },
    { href: '/faq/', label: 'FAQ', desc: 'Quick answers' },
    { href: '/about/', label: 'About A3Track', desc: 'Our mission' },
  ],
};
