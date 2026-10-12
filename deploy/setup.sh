#!/usr/bin/env bash
# Prepares a fresh Ubuntu server. Run once as root:
#   sudo bash setup.sh <domain> "<deploy public key>"
set -euo pipefail

DOMAIN="${1:?usage: setup.sh <domain> <deploy-public-key>}"
DEPLOY_KEY="${2:?usage: setup.sh <domain> <deploy-public-key>}"
APP_DIR=/opt/jobber

if ! command -v docker >/dev/null; then
  curl -fsSL https://get.docker.com | sh
fi

if ! id deploy >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash deploy
fi
usermod -aG docker deploy
install -d -m 700 -o deploy -g deploy /home/deploy/.ssh
touch /home/deploy/.ssh/authorized_keys
grep -qxF "$DEPLOY_KEY" /home/deploy/.ssh/authorized_keys || echo "$DEPLOY_KEY" >> /home/deploy/.ssh/authorized_keys
chown deploy:deploy /home/deploy/.ssh/authorized_keys
chmod 600 /home/deploy/.ssh/authorized_keys

apt-get install -y ufw
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443
ufw --force enable

install -d -o deploy -g deploy "$APP_DIR" "$APP_DIR/db" "$APP_DIR/backups"
if [ ! -f "$APP_DIR/.env" ]; then
  cat > "$APP_DIR/.env" <<ENV
DOMAIN=$DOMAIN
POSTGRES_PASSWORD=$(openssl rand -hex 24)
ENV
  chown deploy:deploy "$APP_DIR/.env"
  chmod 600 "$APP_DIR/.env"
fi

cat > /etc/cron.d/jobber-backup <<'CRON'
15 3 * * * deploy cd /opt/jobber && docker compose exec -T db pg_dump -U jobber jobber | gzip > backups/jobber-$(date +\%F).sql.gz && find backups -name '*.sql.gz' -mtime +14 -delete
CRON

echo "Server ready. Push to main to deploy."
