#!/usr/bin/env bash
# Build the site locally and upload it to the EC2 instance.
# Usage: DEPLOY_HOST=ubuntu@your-ec2-host ./deploy/deploy.sh
#        Add WITH_MAILER=1 to also update the mail service.
set -euo pipefail
: "${DEPLOY_HOST:?Set DEPLOY_HOST, e.g. ubuntu@ec2-xx-xx-xx-xx.ap-south-1.compute.amazonaws.com}"
cd "$(dirname "$0")/.."

npm ci
npm run build

rsync -az --delete dist/ "$DEPLOY_HOST:/tmp/a3track-dist/"
ssh "$DEPLOY_HOST" 'sudo mkdir -p /var/www/a3track && sudo rsync -a --delete /tmp/a3track-dist/ /var/www/a3track/ && sudo chown -R www-data:www-data /var/www/a3track'

if [[ "${WITH_MAILER:-0}" == "1" ]]; then
  rsync -az --exclude node_modules --exclude .env server/ "$DEPLOY_HOST:/tmp/a3track-mailer/"
  ssh "$DEPLOY_HOST" 'sudo mkdir -p /opt/a3track-mailer && sudo rsync -a /tmp/a3track-mailer/ /opt/a3track-mailer/ && cd /opt/a3track-mailer && sudo npm ci --omit=dev && sudo systemctl restart a3track-mailer'
fi

echo "Deployed to $DEPLOY_HOST"
