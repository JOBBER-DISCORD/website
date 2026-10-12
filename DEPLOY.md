# Deploying

The site runs on a single AWS server with Docker Compose:

- **app**: the Next.js site, built into an image by GitHub Actions and stored in GitHub Container Registry
- **db**: Postgres. Waitlist signups live here. It is not reachable from the internet.
- **caddy**: serves the domain over HTTPS (free, automatic certificates) and forwards traffic to the app

Every push to `main` builds a new image and deploys it. Pull requests run lint and build checks only.

## One-time setup

### 1. Create the server
In [Amazon Lightsail](https://lightsail.aws.amazon.com):
1. Create an instance: **Linux/Unix → OS only → Ubuntu 24.04 LTS**, the **2 GB** plan.
2. **Networking → Attach static IP** so the address never changes.
3. **Networking → IPv4 firewall**: add **HTTPS (443)**. SSH (22) and HTTP (80) are open by default.
4. **Snapshots**: turn on automatic daily snapshots.

### 2. Point the domain at it
At your DNS provider, add two **A records** pointing to the static IP:
- `@` (the bare domain, e.g. `example.com`)
- `www`

### 3. Make a deploy key
On your own computer:
```bash
ssh-keygen -t ed25519 -f jobber-deploy -N "" -C "github-deploy"
```
This makes `jobber-deploy` (private key, goes into GitHub) and `jobber-deploy.pub` (public key, goes on the server).

### 4. Prepare the server
Connect with the Lightsail browser SSH button (or `ssh ubuntu@<static-ip>`), then:
```bash
curl -fsSLO https://raw.githubusercontent.com/jobber-discord/website/main/deploy/setup.sh
sudo bash setup.sh example.com "<contents of jobber-deploy.pub>"
```
If the repo is private, paste the script into a file on the server instead of downloading it.

This installs Docker, creates a `deploy` user for GitHub Actions, turns on the firewall, creates `/opt/jobber/.env` with a random database password, and schedules a nightly database backup to `/opt/jobber/backups` (kept for 14 days).

### 5. Connect GitHub
In the repo: **Settings → Secrets and variables → Actions**.

**Variables** tab:
| Name | Value |
|---|---|
| `DEPLOY_HOST` | the static IP |

**Secrets** tab:
| Name | Value |
|---|---|
| `DEPLOY_SSH_KEY` | contents of the private key file `jobber-deploy` |
| `DEPLOY_KNOWN_HOSTS` | output of `ssh-keyscan <static-ip>` run on your computer |

Deploys are skipped until `DEPLOY_HOST` is set.

### 6. Deploy
Push to `main`, or run **Actions → Deploy → Run workflow**. The site is live at `https://<your domain>` a minute or two after the job finishes.

## Day to day

Connect as `deploy` (or switch to it with `sudo -iu deploy`), then `cd /opt/jobber`:

| Task | Command |
|---|---|
| See what's running | `docker compose ps` |
| App logs | `docker compose logs -f app` |
| Waitlist signups | `docker compose exec db psql -U jobber -c "select * from waitlist_signups order by created_at desc"` |
| Export signups to CSV | `docker compose exec -T db psql -U jobber -c "copy waitlist_signups to stdout csv header" > signups.csv` |
| Restore a backup | `gunzip -c backups/<file>.sql.gz \| docker compose exec -T db psql -U jobber` |

`db/schema.sql` runs automatically only the first time the database starts. Apply later schema changes by hand with `docker compose exec db psql -U jobber`.
