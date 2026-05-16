# Deployment Guide

This guide covers multiple deployment options for the neurosurgeon website.

## Prerequisites

- A GitHub account (recommended for most platforms)
- Your domain name (optional but recommended)
- Updated content in all HTML files

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Netlify** is perfect for static sites with free SSL, CDN, and continuous deployment.

#### Steps:

1. **Create a GitHub repository**
   ```bash
   cd neurosurgeon-website
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/neurosurgeon-website.git
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select the repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Configure custom domain** (optional)
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed
   - Netlify will automatically provision SSL certificate

**Estimated time:** 5-10 minutes

---

### Option 2: Vercel

**Vercel** offers similar features to Netlify with excellent performance.

#### Steps:

1. **Using Vercel CLI:**
   ```bash
   npm install -g vercel
   cd neurosurgeon-website
   vercel
   ```

2. **Or via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import from GitHub
   - Deploy with default settings

**Estimated time:** 5 minutes

---

### Option 3: GitHub Pages

**GitHub Pages** is free and simple for small sites.

#### Steps:

1. **Push to GitHub:**
   ```bash
   cd neurosurgeon-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/neurosurgeon-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages"
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Save

3. **Access your site:**
   - URL: `https://yourusername.github.io/neurosurgeon-website/`

**Note:** GitHub Pages doesn't support custom redirects or advanced headers like Netlify.

**Estimated time:** 10 minutes

---

### Option 4: AWS S3 + CloudFront

**AWS S3** with CloudFront provides enterprise-grade hosting with CDN.

#### Steps:

1. **Create S3 Bucket:**
   - Go to AWS S3 console
   - Create bucket (e.g., `neurosurgeon-website`)
   - Enable "Static website hosting"
   - Upload all files

2. **Configure Bucket Policy:**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::neurosurgeon-website/*"
       }
     ]
   }
   ```

3. **Setup CloudFront:**
   - Create CloudFront distribution
   - Origin: Your S3 bucket
   - Enable HTTPS
   - Configure custom domain (optional)

4. **Deploy updates:**
   ```bash
   aws s3 sync . s3://neurosurgeon-website --exclude ".git/*"
   aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
   ```

**Estimated time:** 30-45 minutes

---

## Custom Domain Setup

### For Netlify/Vercel:

1. Add custom domain in platform dashboard
2. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: [Platform's IP]
   
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app (or vercel.app)
   ```

### SSL Certificate:

All platforms (Netlify, Vercel, GitHub Pages) provide **free automatic SSL** via Let's Encrypt.

---

## Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   ```bash
   # Install image optimization tool
   npm install -g imagemin-cli
   
   # Optimize all images
   imagemin images/* --out-dir=images/
   ```

2. **Minify CSS/JS (Optional):**
   ```bash
   # Install minification tools
   npm install -g clean-css-cli uglify-js
   
   # Minify CSS
   cleancss -o css/styles.min.css css/styles.css
   
   # Minify JS
   uglifyjs js/main.js -o js/main.min.js
   
   # Update HTML to reference minified files
   ```

---

## SEO Checklist Post-Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify all meta tags are populated
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Setup Google Analytics (optional)
- [ ] Setup Google Business Profile
- [ ] Add structured data testing

---

## Monitoring

### Google Search Console:

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property with your domain
3. Submit sitemap: `https://yourwebsite.com/sitemap.xml`

### Page Speed:

- Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ on mobile and desktop

---

## Continuous Updates

### Updating Content:

1. Edit HTML files locally
2. Test locally: `python -m http.server 8000`
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. Platform auto-deploys (Netlify/Vercel)

---

## Support

For deployment issues:
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/pages)

---

## Estimated Costs

- **Netlify:** Free (100GB bandwidth/month)
- **Vercel:** Free (100GB bandwidth/month)
- **GitHub Pages:** Free (1GB storage, 100GB bandwidth/month)
- **AWS S3 + CloudFront:** ~$1-5/month (depending on traffic)
- **Custom domain:** ~$10-15/year

**Recommendation:** Start with Netlify (free) and migrate if needed.
