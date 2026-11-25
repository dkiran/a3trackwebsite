# Veyro website

Marketing website for **Veyro** (veyrotrack.com) — AI-powered GPS telematics and fleet intelligence. *Move Smarter.*

Static site built with [Astro](https://astro.build): every page is pre-rendered HTML/CSS with minimal JavaScript, served by nginx.

## Commands

Requires **Node.js 22.23.4 or newer** (the build fails on Node 20). With nvm: `nvm install 22`.

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # build to ./dist
npm run preview    # preview the production build
```

## Where things live

| What | Where |
|---|---|
| Company details (name, address, phone, emails, social, Search Console code) | `src/config/site.ts` |
| Solutions (9 pages) | `src/data/solutions.ts` |
| Industries (14 pages) | `src/data/industries.ts` |
| Platform pages | `src/data/platform.ts` |
| Glossary terms | `src/data/glossary.ts` |
| FAQs | `src/data/faqs.ts` |
| Blog articles (Markdown) | `src/content/blog/*.md` |
| Design tokens and global styles | `src/styles/global.css` |
| Animated hero | `src/components/Hero.astro` |
| SEO head, structured data | `src/layouts/Base.astro`, `src/lib.ts` |
| robots.txt, icons, social image | `public/` |
| Demo-form mail service | `server/` |
| nginx, systemd, deploy script | `deploy/` |

To add a blog post, drop a new `.md` file in `src/content/blog/` with the same front matter as the existing ones. To add a solution or industry, add an entry to the data file; the page, navigation, sitemap and `llms.txt` update automatically.

## Languages

English is the source language. Other languages are produced at build time by `scripts/i18n.mjs`, which copies each page into `/<lang>/…` and replaces its text using a dictionary.

| What | Where |
|---|---|
| List of languages, and sections not translated yet | `src/i18n/config.mjs` |
| French dictionary (English text → French text) | `src/i18n/fr.json` |
| Strings still missing a translation (written by the build) | `src/i18n/<lang>.missing.json` |

- **After editing English text:** run `npm run build`. Any changed or new sentence appears in `fr.missing.json`; add its translation to `fr.json` and build again. Until then that sentence shows in English on the French page.
- **To add a language:** add it to `locales` in `src/i18n/config.mjs`, copy `fr.json` to `<code>.json`, translate the values, and build.
- **Not translated yet:** the blog, glossary and legal pages (listed in `untranslatedPrefixes`). Links to them go to the English page. The animated product demos are also left in English on purpose (`translate="no"`).
- **Preview:** translated pages exist only after a build, so use `npm run build && npm run preview`, not `npm run dev`.
- An empty value in a dictionary means "keep this string as it is" (brand names, plan names, addresses).

## Before launch checklist

- [ ] Replace every value marked `DUMMY` in `src/config/site.ts`.
- [ ] Review product claims (features, AIS-140 support, hardware) against what Veyro actually ships.
- [ ] Have the legal pages (`privacy`, `terms`, `cookies`) reviewed by counsel and remove the template notice in `src/components/Legal.astro`.
- [ ] Replace `public/og-image.png`, `public/logo.png` and `public/favicon.svg` if you have final brand assets.
- [ ] Configure SMTP for the mail service (below) and send a test demo request.

## SEO / AEO / GEO

- `sitemap-index.xml` is generated at build time and referenced in `robots.txt`.
- Every page has a unique title, description, canonical URL, Open Graph/Twitter tags and JSON-LD (Organization, WebSite, BreadcrumbList, plus Service / FAQPage / BlogPosting / DefinedTermSet / SoftwareApplication where relevant).
- `llms.txt` is generated at build time for AI assistants; `robots.txt` explicitly allows major AI crawlers.
- `rss.xml` lists blog posts.

### Google Analytics

1. At analytics.google.com, create a GA4 property for the website and a **Web** data stream for `https://veyrotrack.com`.
2. Copy the stream's **Measurement ID** (`G-…`) into `gaMeasurementId` in `src/config/site.ts`, then build and deploy.
3. Analytics loads only after a visitor clicks **Accept** in the cookie banner; declining sends nothing to Google. Visitors can change their choice with **Cookie settings** in the footer.
4. A completed demo request sends the event `generate_lead`. In GA, under Admin → Events, mark it as a key event to count leads.

### Google Search Console

1. At search.google.com/search-console, add a **Domain** property for `veyrotrack.com`.
2. Google shows a `TXT` record (`google-site-verification=…`). Add it in GoDaddy DNS (type TXT, name `@`), wait a few minutes, then click **Verify**.
   (Alternative: a **URL prefix** property with the HTML-tag method; put the tag's `content` value in `googleSiteVerification` in `src/config/site.ts` and deploy.)
3. Under **Sitemaps**, submit `https://veyrotrack.com/sitemap-index.xml` (it lists the English and French pages).
4. Link Search Console to Google Analytics under GA Admin → Product links → Search Console links.
5. Optional: Bing Webmaster Tools can import the Search Console property; put a Bing tag value in `bingSiteVerification` if you use the tag method.

## Publishing on a new server (quick start)

On a fresh Amazon Linux 2023 or Ubuntu EC2 instance, with the website's port open in the security group:

```bash
sudo dnf install -y git || sudo apt-get install -y git
git clone -b claude/gifted-einstein-cd6zqn https://github.com/dkiran/a3trackwebsite.git veyro-website
cd veyro-website && bash deploy/setup-server.sh
```

The script installs nginx and Node.js 22, builds the site, copies it to `/var/www/veyro` and serves it at the server's IP address (marked `noindex` until the domain is live). It is safe on a server that already runs other applications: it never stops other programs, uses port 80 only if it is free and otherwise picks a free port such as 8080 (choose one with `PORT=8085 bash deploy/setup-server.sh`). Open that port in the security group. To publish later changes: `bash deploy/update-site.sh`. When the domain is ready, follow the HTTPS steps below.

## Deploying to AWS EC2 (Ubuntu)

One-time server setup:

```bash
sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx rsync
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt install -y nodejs
sudo mkdir -p /var/www/veyro /opt/veyro-mailer /etc/veyro
```

Point the DNS A records for `veyrotrack.com` and `www.veyrotrack.com` at the instance, open ports 80 and 443 in the security group, then:

```bash
sudo certbot certonly --nginx -d veyrotrack.com -d www.veyrotrack.com
sudo cp deploy/nginx.conf /etc/nginx/sites-available/veyrotrack.com
sudo ln -s /etc/nginx/sites-available/veyrotrack.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Deploy (from your machine or CI):

```bash
DEPLOY_HOST=ubuntu@your-ec2-host WITH_MAILER=1 ./deploy/deploy.sh
```

### Demo-form email

The contact form posts to `/api/demo`, which nginx proxies to a small Node service (`server/server.mjs`) that emails the request to your sales inbox. It includes a honeypot, input validation, origin check and per-IP rate limiting.

1. In Amazon SES (region `ap-south-1` suggested), verify the `veyrotrack.com` domain, request production access and create SMTP credentials. Any SMTP provider works.
2. On the server, copy `server/.env.example` to `/etc/veyro/mailer.env`, fill it in and `sudo chmod 600` it.
3. Install and start the service:

```bash
sudo cp deploy/veyro-mailer.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now veyro-mailer
curl http://127.0.0.1:8787/api/health
```

Local test without sending mail: `cd server && npm install && DRY_RUN=1 node server.mjs`.
