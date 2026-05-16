# Neurosurgeon Portfolio Website

A lightweight, SEO-optimized static website for a neurosurgeon based in Bangalore, India.

## 🎯 Features

- **Fast Loading**: Pure HTML/CSS/JS with minimal dependencies
- **SEO Optimized**: Schema.org markup, meta tags, sitemap
- **Mobile Responsive**: Mobile-first design
- **Accessibility**: WCAG 2.1 compliant
- **Easy Updates**: Simple HTML structure for content updates

## 📁 Project Structure

```
neurosurgeon-website/
├── index.html              # Home page
├── about.html              # About the doctor
├── specializations.html    # Procedures & expertise
├── testimonials.html       # Patient testimonials
├── contact.html            # Contact & appointment info
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # Interactive features
├── images/                # Images and media
│   ├── hero/
│   ├── gallery/
│   └── icons/
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine instructions
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. Or use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (npx)
   npx serve
   ```

### Deployment

#### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Connect to Netlify
3. Deploy with one click
4. Custom domain setup available

#### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

#### Option 3: GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder
4. Site will be live at `username.github.io/repo-name`

#### Option 4: AWS S3 + CloudFront
1. Create S3 bucket with static website hosting
2. Upload files
3. Configure CloudFront for CDN
4. Point custom domain

## 📝 Customization

### Update Doctor Information

Edit the following files to add doctor's information:

1. **index.html** - Update hero section, name, tagline
2. **about.html** - Add education, experience, certifications
3. **specializations.html** - List procedures and expertise
4. **testimonials.html** - Add patient reviews
5. **contact.html** - Update contact details and location

### Update Images

Place images in the `images/` folder:
- `hero/` - Hero banner images
- `gallery/` - Procedure/clinic images
- `icons/` - UI icons

Optimize images before upload:
- Use WebP format for better compression
- Resize to appropriate dimensions
- Use lazy loading (already implemented)

### SEO Settings

Update in each HTML file's `<head>`:
- `<title>` - Page title
- `<meta name="description">` - Page description
- `<meta property="og:*">` - Social media sharing
- Schema.org markup in `<script type="application/ld+json">`

## 🔧 Performance

- No external frameworks (faster loading)
- Minimal CSS/JS
- Image lazy loading
- Optimized for Core Web Vitals
- Target: <2s page load time

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers

## 📄 License

MIT License - Free to use and modify

## 🆘 Support

For updates or issues, refer to the inline code comments or documentation.
