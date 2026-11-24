#!/usr/bin/env bash
# Publish the latest version of the Veyro website on a server set up with deploy/setup-server.sh.
# Run from inside the repository:  bash deploy/update-site.sh
set -euo pipefail
cd "$(dirname "$0")/.."
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1091
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 22 >/dev/null
git pull --ff-only
npm ci
npm run build
sudo rsync -a --delete dist/ /var/www/veyro/
echo "Published. Hard-refresh the site in your browser to see the changes."
