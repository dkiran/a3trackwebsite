#!/usr/bin/env bash
# One-time setup of a NEW server for the Veyro website (Amazon Linux 2023 or Ubuntu).
# Installs nginx, Git and Node.js 22, builds the site and serves it on port 80.
#
# Run as the normal login user (ec2-user or ubuntu), from inside the cloned repository:
#   bash deploy/setup-server.sh
# Afterwards, publish changes with:  bash deploy/update-site.sh
set -euo pipefail

WEB_ROOT=/var/www/veyro
NGINX_CONF=/etc/nginx/conf.d/veyro.conf
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> 1/5 Installing nginx, Git and rsync"
if command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y nginx git rsync
elif command -v apt-get >/dev/null 2>&1; then
  sudo apt-get update -y && sudo apt-get install -y nginx git rsync curl
else
  echo "Unsupported system: needs dnf (Amazon Linux) or apt-get (Ubuntu)." >&2; exit 1
fi

echo "==> 2/5 Installing Node.js 22 (via nvm, for this user only)"
export NVM_DIR="$HOME/.nvm"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
fi
# shellcheck disable=SC1091
. "$NVM_DIR/nvm.sh"
nvm install 22 >/dev/null
nvm use 22 >/dev/null
echo "    Node $(node -v)"

echo "==> 3/5 Building the website"
cd "$REPO_DIR"
npm ci
npm run build

echo "==> 4/5 Publishing to $WEB_ROOT"
sudo mkdir -p "$WEB_ROOT"
sudo rsync -a --delete dist/ "$WEB_ROOT/"

echo "==> 5/5 Configuring nginx"
# Ubuntu ships a default site on port 80; remove it so Veyro answers instead.
sudo rm -f /etc/nginx/sites-enabled/default
sudo tee "$NGINX_CONF" >/dev/null <<NGINX
# Veyro website on port 80, reachable by the server's IP address.
# When the domain is ready, replace this file with deploy/nginx.conf (adds HTTPS).
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name veyro;

    root $WEB_ROOT;
    index index.html;
    charset utf-8;
    server_tokens off;

    # Keep the site out of search engines until the real domain is live.
    add_header X-Robots-Tag "noindex, nofollow" always;
    add_header X-Content-Type-Options "nosniff" always;

    gzip on;
    gzip_min_length 512;
    gzip_types text/plain text/css application/javascript application/json application/xml image/svg+xml;

    location /_astro/ { expires 1y; access_log off; }
    location /api/ { proxy_pass http://127.0.0.1:8787; proxy_set_header X-Real-IP \$remote_addr; }
    location / { try_files \$uri \$uri/ =404; expires -1; }

    error_page 404 /404.html;
}
NGINX

# Amazon Linux's main nginx.conf also defines a server on port 80; ours is marked default_server, so it wins.
sudo nginx -t

# Before starting nginx, make sure nothing else already holds port 80.
BLOCKER="$(sudo ss -ltnpH 'sport = :80' 2>/dev/null | grep -v nginx || true)"
if [ -n "$BLOCKER" ]; then
  echo
  echo "Port 80 is already in use by another program, so nginx cannot start:" >&2
  echo "$BLOCKER" >&2
  echo "Stop that program (for Apache: sudo systemctl disable --now httpd), then run this script again." >&2
  exit 1
fi

sudo systemctl enable nginx >/dev/null 2>&1
if ! sudo systemctl restart nginx; then
  echo
  echo "nginx did not start. Its last messages:" >&2
  sudo journalctl -u nginx --no-pager -n 15 >&2 || true
  exit 1
fi

IP="$(curl -fsS -m 3 http://checkip.amazonaws.com 2>/dev/null || hostname -I | awk '{print $1}')"
echo
echo "Done. Open http://${IP}/ in your browser."
echo "If it does not load, allow inbound HTTP (port 80) in the EC2 security group."
