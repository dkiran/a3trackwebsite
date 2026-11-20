// Veyro demo-request mailer.
// Listens on 127.0.0.1 only; nginx proxies POST /api/demo to it.
// Configure with environment variables (see .env.example).
import http from 'node:http';
import nodemailer from 'nodemailer';

const env = process.env;
const PORT = Number(env.PORT || 8787);
const MAIL_TO = env.MAIL_TO;
const MAIL_FROM = env.MAIL_FROM;
const ALLOWED_ORIGINS = (env.ALLOWED_ORIGINS || 'https://veyro.com,https://www.veyro.com').split(',').map((s) => s.trim());
const DRY_RUN = env.DRY_RUN === '1'; // log instead of sending (local testing)

if (!DRY_RUN && (!MAIL_TO || !MAIL_FROM || !env.SMTP_HOST)) {
  console.error('Missing MAIL_TO, MAIL_FROM or SMTP_HOST. See server/.env.example.');
  process.exit(1);
}

const transport = DRY_RUN
  ? null
  : nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT || 587),
      secure: Number(env.SMTP_PORT) === 465,
      auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined,
    });

// Simple in-memory rate limit: 5 requests per IP per hour.
const hits = new Map();
const LIMIT = 5;
const WINDOW = 60 * 60 * 1000;
const limited = (ip) => {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  list.push(now);
  hits.set(ip, list);
  return list.length > LIMIT;
};
setInterval(() => { const now = Date.now(); for (const [ip, l] of hits) if (!l.some((t) => now - t < WINDOW)) hits.delete(ip); }, WINDOW).unref();

const clean = (v, max) => String(v ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const send = (res, code, body) => { res.writeHead(code, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(body)); };

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/health') return send(res, 200, { ok: true });
  if (req.method !== 'POST' || req.url !== '/api/demo') return send(res, 404, { error: 'not_found' });

  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return send(res, 403, { error: 'forbidden' });

  const ip = clean(req.headers['x-real-ip'] || req.socket.remoteAddress, 64);
  if (limited(ip)) return send(res, 429, { error: 'too_many_requests' });

  let raw = '';
  req.on('data', (c) => { raw += c; if (raw.length > 20_000) req.destroy(); });
  req.on('end', async () => {
    let d;
    try { d = JSON.parse(raw); } catch { return send(res, 400, { error: 'invalid_json' }); }

    // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
    if (d.website) return send(res, 200, { ok: true });

    const f = {
      name: clean(d.name, 100), company: clean(d.company, 120), email: clean(d.email, 160), phone: clean(d.phone, 30),
      fleetSize: clean(d.fleetSize, 20), industry: clean(d.industry, 60),
      message: String(d.message ?? '').trim().slice(0, 2000),
    };
    if (!f.name || !f.company || !f.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return send(res, 422, { error: 'invalid_fields' });

    const rows = [['Name', f.name], ['Company', f.company], ['Email', f.email], ['Phone', f.phone], ['Fleet size', f.fleetSize], ['Industry', f.industry], ['Message', f.message], ['IP', ip]];
    const mail = {
      from: MAIL_FROM, to: MAIL_TO, replyTo: f.email,
      subject: `New demo request: ${f.company} (${f.fleetSize || 'fleet size n/a'})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<h2>New Veyro demo request</h2><table cellpadding="6" style="border-collapse:collapse">${rows.map(([k, v]) => `<tr><td style="border:1px solid #ddd"><b>${k}</b></td><td style="border:1px solid #ddd">${esc(v).replace(/\n/g, '<br>')}</td></tr>`).join('')}</table>`,
    };
    try {
      if (DRY_RUN) console.log('[DRY_RUN] would send:', mail.subject, '\n' + mail.text);
      else await transport.sendMail(mail);
      send(res, 200, { ok: true });
    } catch (err) {
      console.error('sendMail failed:', err.message);
      send(res, 502, { error: 'mail_failed' });
    }
  });
});

server.listen(PORT, '127.0.0.1', () => console.log(`a3track-mailer listening on 127.0.0.1:${PORT}${DRY_RUN ? ' (dry run)' : ''}`));
