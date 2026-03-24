# Deployment Guide for MapCombiner

This guide explains how to deploy MapCombiner to your AWS server at `mapcombiner.travel-tracker.org` using PM2 on port 3003.

## Prerequisites

- SSH access to your AWS server.
- Node.js installed on the server (v18+ recommended).
- Nginx installed and running.
- PM2 installed globally (`npm install -g pm2`).

## 1. Prepare the Server

Connect to your server:
```bash
ssh user@your-aws-ip
```

Navigate to your web apps directory:
```bash
cd ~/apps
```

## 2. Clone and Install

Clone the repository:
```bash
git clone https://github.com/changzhiai/MapCombiner.git map-combiner
cd map-combiner
```

Install dependencies:
```bash
npm install
```

## 3. Build

Build the static application:
```bash
npm run build
```

## 4. Start with PM2 (Port 3003)

Start the application server using the provided ecosystem config:
```bash
pm2 start ecosystem.config.cjs
pm2 save
```

This will run `vite preview` on port **3003**.

## 5. Configure Nginx

Create a new Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/map-combiner
```

Paste the following configuration:

```nginx
server {
    server_name mapcombiner.travel-tracker.org;

    location / {
        proxy_pass http://localhost:3003; # Forward to the PM2 port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/map-combiner /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 6. SSL Configuration (HTTPS)

If you have Certbot installed:
```bash
sudo certbot --nginx -d mapcombiner.travel-tracker.org
```

## 7. DNS

Ensure you have created a valid DNS record (A record or CNAME) for `mapcombiner` in your `travel-tracker.org` domain pointing to your AWS server's IP address.

## Troubleshooting

### "Blocked request" Error
If you see a "Blocked request" error, it means the hostname isn't allowed. We have fixed this in `vite.config.js`. To apply the fix:

1. Pull the latest changes:
   ```bash
   git pull
   ```
2. Restart the PM2 process:
   ```bash
   pm2 restart map-combiner
   ```
