# Deployment to Cloudflare Pages

## Prerequisites
- GitHub account with this repository
- Cloudflare account (free tier sufficient)

## Steps:

### 1. Connect to Cloudflare Pages
- Go to Cloudflare Dashboard
- Select Pages
- Click "Create a project"
- Select "Connect to Git"
- Authorize Cloudflare to access GitHub
- Select this repository

### 2. Configure Build Settings
- Build command: `hugo --minify`
- Build output directory: `public`
- Click "Save and Deploy"

### 3. Configure Domain
- In Cloudflare Pages settings
- Go to Custom domains
- Add your custom domain
- Follow DNS configuration

### 4. Enable HTTPS
- Cloudflare automatically provides SSL/TLS

### 5. Environment Variables (if needed)
- Pages Settings > Environment variables
- Add any integration keys needed

## Continuous Deployment
- Every commit to `master` automatically triggers build
- Site deploys within 1-2 minutes
- View deployment status in Cloudflare dashboard

## Monitoring
- Check Cloudflare Analytics for traffic
- Monitor Google Analytics for user behavior
- Set up Cloudflare alerts for build failures
