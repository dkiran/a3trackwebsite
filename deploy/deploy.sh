#!/usr/bin/env bash
# Build the site locally and upload it to the EC2 instance.
# Usage: DEPLOY_HOST=ubuntu@your-ec2-host ./deploy/deploy.sh
set -euo pipefail
: "${DEPLOY_HOST:?Set DEPLOY_HOST, e.g. ubuntu@ec2-xx-xx-xx-xx.ap-south-1.compute.amazonaws.com}"
cd "$(dirname "$0")/.."

npm ci
npm run build

rsync -az --delete dist/ "$DEPLOY_HOST:/tmp/veyro-dist/"
ssh "$DEPLOY_HOST" 'sudo mkdir -p /var/www/veyro && sudo rsync -a --delete /tmp/veyro-dist/ /var/www/veyro/ && sudo chown -R www-data:www-data /var/www/veyro'


echo "Deployed to $DEPLOY_HOST"
