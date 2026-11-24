#!/usr/bin/env bash
# One-time setup of the Veyro website on an Amazon Linux 2023 or Ubuntu server.
# Installs nginx, Git and Node.js 22, builds the site and serves it with nginx.
#
# Safe on a server that already runs other applications: it never stops or changes
# other programs. It uses port 80 only if nothing is listening there; otherwise it
# picks the first free port from 8080, 8081, 8090, 8888. To choose the port yourself:
#   PORT=8085 bash deploy/setup-server.sh
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
port_in_use() { [ -n "$(sudo ss -ltnH "sport = :$1" 2>/dev/null)" ]; }
NGINX_WAS_RUNNING=no
systemctl is-active --quiet nginx && NGINX_WAS_RUNNING=yes
# Our own earlier config may hold a port from a previous run; ignore it while choosing.
sudo rm -f "$NGINX_CONF"
[ "$NGINX_WAS_RUNNING" = yes ] && sudo systemctl reload nginx

if [ -n "${PORT:-}" ]; then
  if port_in_use "$PORT"; then
    echo "Port $PORT is already used by another program. Choose another: PORT=8085 bash deploy/setup-server.sh" >&2
    exit 1
  fi
else
  for candidate in 80 8080 8081 8090 8888; do
    if ! port_in_use "$candidate"; then PORT=$candidate; break; fi
  done
  if [ -z "${PORT:-}" ]; then
    echo "Ports 80, 8080, 8081, 8090 and 8888 are all in use. Choose one: PORT=8085 bash deploy/setup-server.sh" >&2
    exit 1
  fi
fi
echo "    Using port $PORT"
if [ "$PORT" != 80 ]; then
  echo "    (Port 80 is used by another application on this server; it is left untouched.)"
fi

# nginx ships a placeholder site on port 80 (Ubuntu: sites-enabled/default; Amazon Linux: a
# server block inside nginx.conf). If nginx was not already running, that placeholder serves
# nothing of yours, but it would stop nginx from starting when another program owns port 80,
# or answer instead of Veyro. So, only in that case, switch it off (a backup is kept).
if [ "$NGINX_WAS_RUNNING" = no ]; then
  if [ -L /etc/nginx/sites-enabled/default ]; then
    sudo rm -f /etc/nginx/sites-enabled/default
  fi
  if grep -q '^[[:space:]]*listen[[:space:]]*80;' /etc/nginx/nginx.conf; then
    sudo cp -n /etc/nginx/nginx.conf /etc/nginx/nginx.conf.veyro-backup
    sudo python3 "$REPO_DIR/deploy/disable-placeholder.py" /etc/nginx/nginx.conf
  fi
fi
sudo tee "$NGINX_CONF" >/dev/null <<NGINX
# Veyro website, served on port $PORT.
# Visitors normally arrive through the server's main web server (which handles HTTPS for
# veyrotrack.com and forwards to this port); it can also be opened directly by IP and port.

# Search engines may index the site only on the real domain, never on the IP address.
map \$host \$veyro_robots {
    veyrotrack.com      "";
    www.veyrotrack.com  "";
    default             "noindex, nofollow";
}

server {
    listen $PORT default_server;
    listen [::]:$PORT default_server;
    server_name veyro;

    root $WEB_ROOT;
    index index.html;
    charset utf-8;
    server_tokens off;

    # One address for search engines: www.veyrotrack.com redirects to veyrotrack.com.
    if (\$host = www.veyrotrack.com) { return 301 https://veyrotrack.com\$request_uri; }

    add_header X-Robots-Tag \$veyro_robots always;
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

sudo systemctl enable nginx >/dev/null 2>&1
if [ "$NGINX_WAS_RUNNING" = yes ]; then
  START="sudo systemctl reload nginx"   # keep other sites served by this nginx running
else
  START="sudo systemctl start nginx"
fi
if ! $START; then
  echo
  echo "nginx did not start. Its last messages:" >&2
  sudo journalctl -u nginx --no-pager -n 15 >&2 || true
  exit 1
fi

IP="$(curl -fsS -m 3 http://checkip.amazonaws.com 2>/dev/null || hostname -I | awk '{print $1}')"
echo
if [ "$PORT" = 80 ]; then URL="http://${IP}/"; else URL="http://${IP}:${PORT}/"; fi
echo "Done. Open $URL in your browser."
echo "If it does not load, allow inbound TCP port $PORT in the EC2 security group."
