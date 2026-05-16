# Images Directory

This directory contains all images for the website.

## Directory Structure

```
images/
├── hero/           # Hero section images
├── gallery/        # Procedure and clinic images
├── icons/          # Icons and logos
└── README.md       # This file
```

## Image Guidelines

### Format Recommendations

- **Photos:** Use WebP format (best compression) with JPG fallback
- **Logos/Icons:** Use PNG or SVG
- **Thumbnails:** Max 800px width
- **Hero images:** Max 1920px width

### Optimization

Before uploading images, optimize them:

```bash
# Using online tools
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app

# Using command line (ImageMagick)
convert input.jpg -quality 85 -resize 1920x output.jpg

# Using ImageOptim (Mac)
# Drag and drop images into ImageOptim app
```

### Naming Convention

Use descriptive, SEO-friendly names:
- ✅ `brain-surgery-bangalore-hospital.jpg`
- ✅ `neurosurgeon-profile-photo.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo.jpg`

### Required Images

1. **Hero Section:**
   - `hero/doctor-profile.jpg` - Professional photo of the doctor
   - `hero/og-image.jpg` - Social media preview (1200x630px)

2. **About Page:**
   - `about/doctor-full-profile.jpg` - Full professional photo

3. **Icons:**
   - `icons/favicon.png` - Website favicon (32x32px, 64x64px)
   - `icons/apple-touch-icon.png` - iOS icon (180x180px)

4. **Gallery (Optional):**
   - Anonymized procedure photos
   - Hospital/clinic photos
   - Team photos
   - Equipment photos

### Accessibility

Always add descriptive alt text in HTML:
```html
<img src="images/hero/doctor-profile.jpg" 
     alt="Dr. [Name], expert neurosurgeon in Bangalore"
     loading="lazy">
```

### File Size Guidelines

- Hero images: < 200KB
- Gallery images: < 150KB
- Thumbnails: < 50KB
- Icons: < 20KB

### Copyright

Ensure all images are:
- ✅ Owned by you
- ✅ Purchased with proper license
- ✅ Patient photos with written consent
- ❌ Downloaded from Google Images without permission
- ❌ Stock photos without license

## Quick Image Checklist

Before uploading:
- [ ] Optimized for web
- [ ] Proper dimensions
- [ ] SEO-friendly filename
- [ ] Compressed to appropriate size
- [ ] Format is web-compatible (JPG, PNG, WebP, SVG)
- [ ] Rights/permissions obtained
