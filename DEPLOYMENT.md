# 📋 Deployment Guide

This guide covers deploying your portfolio website to production.

## Prerequisites

- Git repository initialized
- Code pushed to GitHub (recommended)
- All customizations completed
- Images and resume files in place

## Platform Comparison

| Platform | Cost | Ease | Cold Start | Best For |
|----------|------|------|-----------|----------|
| Vercel | Free/Paid | ⭐⭐⭐⭐⭐ | None | Next.js projects |
| Netlify | Free/Paid | ⭐⭐⭐⭐ | Minimal | Static/JAMstack |
| Railway | Free/Paid | ⭐⭐⭐⭐ | None | Full-stack apps |
| Render | Free/Paid | ⭐⭐⭐ | 30s | General hosting |
| AWS Amplify | Paid | ⭐⭐⭐ | None | AWS ecosystem |

## Recommended: Deploy to Vercel

Vercel is the official Next.js hosting platform and provides the best experience.

### Step 1: Prepare Your Repository

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "New Project"
5. Select your portfolio repository
6. Click "Import"

### Step 3: Configure Project

In Vercel dashboard:

**Framework Preset**: Next.js

**Build and Output Settings** (usually auto-detected):
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Environment Variables**:
```
NEXT_PUBLIC_SITE_NAME=Vichitra Mohan
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_EMAIL=mohanvichitra@gmail.com
NEXT_PUBLIC_PHONE=+91 8318474387
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/vichitra-mohan-933811255/
```

### Step 4: Deploy

Click "Deploy" button. Vercel will:
1. Build your project
2. Run tests (if any)
3. Deploy to production
4. Provide a production URL

### Step 5: Add Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (usually 24-48 hours)

## Alternative: Deploy to Netlify

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → "Sign up with GitHub"
3. Authorize Netlify
4. Click "New site from Git"
5. Select your repository

### Step 2: Configure Build

**Build command**: `npm run build && npm run export` (for static export)
**Publish directory**: `out`

Or for server-side rendering:
**Build command**: `npm run build`
**Publish directory**: `.next`

### Step 3: Deploy

1. Click "Deploy site"
2. Wait for build completion
3. Get your production URL

### Step 4: Add Domain

1. Go to Domain settings
2. Add custom domain
3. Update DNS records

## Deploy to Railway.app

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project

### Step 2: Deploy

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Create project
railway init

# Deploy
railway up
```

### Step 3: Configure Environment

In Railway dashboard:
1. Add environment variables
2. Connect your GitHub repository
3. Enable automatic deployments

## Post-Deployment Checklist

### Testing
- [ ] Visit production URL
- [ ] Test all navigation links
- [ ] Verify images load
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Test dark mode (if enabled)
- [ ] Verify resume download

### Performance
- [ ] Run PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Optimize images if needed
- [ ] Enable caching

### SEO
- [ ] Verify sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check robots.txt
- [ ] Verify meta tags

### Security
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Set security headers
- [ ] Enable CORS if needed
- [ ] Review environment variables

### Monitoring
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Enable error tracking
- [ ] Monitor performance metrics
- [ ] Set up alerts

## Update After Deployment

### Automatic Deployments

With Vercel/Netlify, pushing to main branch triggers automatic deployment:

```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push origin main

# Deployment happens automatically!
```

### Manual Deployment

If needed:

**Vercel**:
```bash
vercel --prod
```

**Netlify**:
```bash
netlify deploy --prod
```

## Setting Up a Custom Domain

### Step 1: Register Domain

Options:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare
- AWS Route 53

### Step 2: Connect to Hosting Platform

**Vercel**:
1. Project Settings → Domains
2. Add your domain
3. Follow DNS instructions

**Netlify**:
1. Domain settings
2. Add custom domain
3. Update DNS records

### Step 3: Update DNS Records

Your hosting provider will give you DNS records to add:

Example:
```
Type: CNAME
Name: www
Value: your-site.vercel.app
```

or

```
Type: A
Name: @
Value: 76.76.19.165
```

### Step 4: Verify Domain

After DNS propagation (24-48 hours):
- [ ] Domain points to your site
- [ ] HTTPS is enabled
- [ ] Redirects work properly

## Troubleshooting

### Build Fails
1. Check build logs
2. Verify all dependencies are installed
3. Check environment variables
4. Try local build: `npm run build`

### Images Not Loading
1. Verify image paths are correct
2. Check image files exist in `public/` folder
3. Clear build cache
4. Rebuild deployment

### Slow Performance
1. Check Core Web Vitals in PageSpeed Insights
2. Optimize images
3. Enable caching
4. Review bundle size

### Domain Issues
1. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
2. Verify DNS records in registrar
3. Wait for full propagation
4. Contact support if issues persist

## Monitoring and Analytics

### Add Google Analytics

1. Create Google Analytics account
2. Get Measurement ID
3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Monitor with Vercel Analytics

- Automatically enabled on Vercel
- Dashboard shows performance metrics
- Web Vitals insights

### Track Errors

Options:
- Sentry
- LogRocket
- Rollbar
- Datadog

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup

```bash
# Create backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

## Support

- **Vercel Issues**: vercel.com/support
- **Netlify Issues**: netlify.com/support
- **Next.js Help**: nextjs.org/docs

---

Successfully deployed! 🎉
