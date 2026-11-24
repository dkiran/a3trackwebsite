#!/usr/bin/env bash
# Build the site locally and upload it to the EC2 instance.
# Usage: DEPLOY_HOST=ubuntu@your-ec2-host ./deploy/deploy.sh
#        Add WITH_MAILER=1 to also update the mail service.
set -euo pipefail
: "${DEPLOY_HOST:?Set DEPLOY_HOST, e.g. ubuntu@ec2-xx-xx-xx-xx.ap-south-1.compute.amazonaws.com}"
cd "$(dirname "$0")/.."

npm ci
npm run build

rsync -az --delete dist/ "$DEPLOY_HOST:/tmp/veyro-dist/"
ssh "$DEPLOY_HOST" 'sudo mkdir -p /var/www/veyro && sudo rsync -a --delete /tmp/veyro-dist/ /var/www/veyro/ && sudo chown -R www-data:www-data /var/www/veyro'

if [[ "${WITH_MAILER:-0}" == "1" ]]; then
  rsync -az --exclude node_modules --exclude .env server/ "$DEPLOY_HOST:/tmp/veyro-mailer/"
  ssh "$DEPLOY_HOST" 'sudo mkdir -p /opt/veyro-mailer && sudo rsync -a /tmp/veyro-mailer/ /opt/veyro-mailer/ && cd /opt/veyro-mailer && sudo npm ci --omit=dev && sudo systemctl restart veyro-mailer'
fi

echo "Deployed to $DEPLOY_HOST"
