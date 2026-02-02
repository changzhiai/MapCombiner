# Deployment Guide for MapCombiner

This guide explains how to deploy MapCombiner to your AWS server at `mapcombiner.travel-tracker.org`.

## Prerequisites

- SSH access to your AWS server.
- Node.js installed on the server (v18+ recommended).
- Nginx installed and running.

## 1. Prepare the Server

Connect to your server:
```bash
ssh user@your-aws-ip
```

Navigate to your web apps directory (e.g., `/var/www` or `~/apps`):
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

This will create a `dist` directory containing the production files.

## 4. Configure Nginx

Since this is a static Vite application, we will serve the `dist` folder directly using Nginx (no PM2 required).

Create a new Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/mapcombiner.travel-tracker.org
```

Paste the following configuration (update the `root` path to match your actual path):

```nginx
server {
    server_name mapcombiner.travel-tracker.org;

    # POINT THIS TO YOUR DIST FOLDER
    root /home/ubuntu/apps/map-combiner/dist; 
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
*Note: If your user is not `ubuntu` or your apps are in a different path, update the `root` directive accordingly.*

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/mapcombiner.travel-tracker.org /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 5. SSL Configuration (HTTPS)

If you have Certbot installed:
```bash
sudo certbot --nginx -d mapcombiner.travel-tracker.org
```

## 6. DNS

Ensure you have created a valid DNS record (A Record or CNAME) for `mapcombiner` in your `travel-tracker.org` DNS settings pointing to your AWS server IP.
