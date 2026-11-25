// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for company details.
// ⚠ Everything marked DUMMY is placeholder data — replace before launch.
// ─────────────────────────────────────────────────────────────────────────
export const site = {
  name: 'Veyro',
  legalName: 'Veyro Technologies Pvt. Ltd.', // DUMMY
  url: 'https://veyrotrack.com',
  tagline: 'Move Smarter.',
  description:
    'Veyro is an AI-powered GPS telematics and fleet intelligence platform. Track vehicles and assets in real time, improve driver safety, cut fuel costs and automate compliance, with AI agents on WhatsApp, phone call and chat, 24/7 in regional languages.',
  email: 'hello@veyrotrack.com', // DUMMY
  salesEmail: 'sales@veyrotrack.com', // DUMMY
  supportEmail: 'support@veyrotrack.com', // DUMMY
  phone: '+91 80 0000 0000', // DUMMY
  phoneHref: '+918000000000', // DUMMY
  aiCallNumber: '1800 000 0000', // DUMMY — AI agent call-centre number
  aiCallHref: '+9118000000000', // DUMMY
  whatsappNumber: '+91 90000 00000', // DUMMY — WhatsApp AI agent number
  whatsappHref: 'https://wa.me/919000000000', // DUMMY
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
    linkedin: 'https://www.linkedin.com/company/veyro',
    x: 'https://x.com/veyro',
    youtube: 'https://www.youtube.com/@veyro',
  },
  // Google Analytics 4 measurement ID, e.g. 'G-ABC123XYZ'. Leave empty to switch analytics off.
  // Analytics loads only after a visitor accepts the cookie banner (src/components/ConsentBanner.astro).
  gaMeasurementId: '',
  // IndexNow key (public by design): lets Bing and other engines re-crawl changed pages quickly. File: public/<key>.txt
  indexNowKey: 'fe34d3654fdc6f8ef598a1e0666b0b57',
  // Google Tag Manager container ID. Loaded only after the visitor accepts the cookie banner.
  // If GA4 is set up inside Tag Manager, leave gaMeasurementId empty to avoid counting visits twice.
  gtmContainerId: 'GTM-P7GKC98R',
  // Paste the Google Search Console HTML-tag verification code here (content value only).
  googleSiteVerification: '',
  bingSiteVerification: '',
  // Founding-customer pilot offered on the site (home, pricing, contact). The fee amount is agreed per enquiry.
  pilot: {
    days: 30,
    vehicles: '1 or 2',
  },
  // Endpoint the demo form posts to (proxied by nginx to the mail service in /server).
  formEndpoint: '/api/demo',
};

export const nav = {
  platform: [
    { href: '/platform/', label: 'Platform overview', desc: 'One connected operations cloud' },
    { href: '/platform/ai-agent/', label: 'AI agents: WhatsApp, calls & ChatGPT', desc: 'Ask your fleet anything, 24/7' },
    { href: '/platform/ai-fleet-intelligence/', label: 'AI fleet intelligence', desc: 'Predict, prioritise, automate' },
    { href: '/platform/hardware/', label: 'Hardware & devices', desc: 'Trackers, dash cams, sensors' },
    { href: '/platform/integrations/', label: 'Integrations & API', desc: 'Connect ERP, TMS and more' },
    { href: '/platform/security/', label: 'Security & privacy', desc: 'Enterprise-grade protection' },
    { href: '/ai-for-gps-companies/', label: 'AI for GPS companies', desc: 'Add AI agents to your platform' },
  ],
  resources: [
    { href: '/blog/', label: 'Blog', desc: 'Guides for fleet leaders' },
    { href: '/glossary/', label: 'Telematics glossary', desc: 'Every term, plainly explained' },
    { href: '/roi-calculator/', label: 'ROI calculator', desc: 'Estimate your savings' },
    { href: '/faq/', label: 'FAQ', desc: 'Quick answers' },
    { href: '/about/', label: 'About Veyro', desc: 'Our mission' },
  ],
};
