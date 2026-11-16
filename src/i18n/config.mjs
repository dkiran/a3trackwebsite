// Languages the site is published in. English is the source; every other language is produced at build time
// by scripts/i18n.mjs from a dictionary file in this folder (for example fr.json).
// To add a language: add it here, create src/i18n/<code>.json, run `npm run build`, and translate the strings
// the build reports as missing (they are written to src/i18n/<code>.missing.json).
export const defaultLocale = 'en';
export const locales = [
  { code: 'en', name: 'English', label: 'EN', ogLocale: 'en_IN' },
  { code: 'fr', name: 'Français', label: 'FR', ogLocale: 'fr_FR' },
];

// Sections that are not translated yet. Links to them stay on the English page.
export const untranslatedPrefixes = ['/blog/', '/glossary/', '/privacy/', '/terms/', '/cookies/', '/404'];

export const isTranslatable = (path) => !untranslatedPrefixes.some((p) => path.startsWith(p));
