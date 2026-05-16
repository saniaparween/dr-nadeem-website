# Customization Guide

This guide will help you customize the website with the doctor's actual information.

## Quick Start Checklist

- [ ] Update doctor's name and credentials
- [ ] Add professional photos
- [ ] Update contact information
- [ ] Fill in education and experience
- [ ] Add testimonials
- [ ] Customize colors (optional)
- [ ] Update social media links
- [ ] Configure Google Maps

---

## 1. Update Doctor Information

### In ALL HTML files (index.html, about.html, etc.):

**Find and replace:**
- `[Name]` → Doctor's name (e.g., "Rajesh Kumar")
- `[Full Name]` → Full name with title (e.g., "Dr. Rajesh Kumar, MCh")
- `[Phone Number]` → Contact number (e.g., "+91-98765-43210")
- `[Email]` → Email address
- `[Street Address]` → Full street address
- `[Pin Code]` → Postal code
- `[Hospital/Clinic Name]` → Primary hospital name

**Quick find & replace in VSCode:**
- Press `Cmd+Shift+F` (Mac) or `Ctrl+Shift+F` (Windows)
- Search for `[Name]` and replace all
- Repeat for each placeholder

---

## 2. Update SEO Meta Tags

### In index.html (lines 4-6):

```html
<meta name="description" content="Dr. [Name] - Leading Neurosurgeon in Bangalore specializing in brain and spine surgery. Expert care with advanced surgical techniques.">
<meta name="keywords" content="neurosurgeon bangalore, brain surgeon, spine surgery, [doctor name], best neurosurgeon bangalore">
```

**Update description** with:
- Doctor's actual name
- Specific specializations
- Years of experience
- Hospital affiliations

**Example:**
```html
<meta name="description" content="Dr. Rajesh Kumar - Board-certified Neurosurgeon with 15+ years experience in Bangalore. Specializing in minimally invasive brain tumor surgery, spine surgery, and stroke management at Apollo Hospital.">
```

### Update Schema.org Markup (lines 35-54 in index.html):

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Rajesh Kumar",
  "image": "https://yourwebsite.com/images/doctor-profile.jpg",
  "description": "Expert neurosurgeon specializing in brain and spine surgery in Bangalore",
  "medicalSpecialty": "Neurosurgery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 MG Road, Apollo Hospital",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "telephone": "+91-98765-43210",
  "url": "https://yourwebsite.com"
}
```

---

## 3. Add Images

### Required Images:

1. **Doctor's Profile Photo**
   - Location: `images/hero/doctor-profile.jpg`
   - Size: 800x800px minimum
   - Professional headshot or full-body photo in white coat

2. **Social Media Preview Image**
   - Location: `images/hero/og-image.jpg`
   - Size: 1200x630px (exact)
   - Include doctor's photo + website name

3. **Favicon**
   - Location: `images/icons/favicon.png`
   - Sizes: 32x32px and 64x64px

### Update Image References:

In `index.html`, replace:
```html
<div class="hero-placeholder"></div>
```

With:
```html
<img src="images/hero/doctor-profile.jpg" 
     alt="Dr. [Name], Neurosurgeon in Bangalore"
     loading="lazy">
```

In `about.html`, replace:
```html
<div class="image-placeholder"></div>
```

With:
```html
<img src="images/about/doctor-full-profile.jpg" 
     alt="Dr. [Name] in consultation"
     loading="lazy">
```

---

## 4. Update Education & Experience

### In about.html (Education section, lines 58-93):

Replace placeholder text:

```html
<h3>MCh in Neurosurgery</h3>
<p class="institution">NIMHANS, Bangalore</p>
<p class="year">2010-2015</p>
```

### In about.html (Experience section, lines 97-120):

```html
<h3>Senior Consultant Neurosurgeon</h3>
<p class="hospital">Apollo Hospital, Bangalore</p>
<p class="duration">2015 - Present</p>
<ul>
    <li>Performed 500+ successful brain tumor surgeries</li>
    <li>Pioneer in minimally invasive spine surgery</li>
    <li>Head of Neurosurgical Department</li>
</ul>
```

---

## 5. Add Testimonials

### In testimonials.html (lines 64-130):

Replace sample testimonials with real ones:

```html
<div class="testimonial-card">
    <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">"[Patient's review text]"</p>
    <div class="testimonial-author">
        <p class="author-name">[Patient Name]</p>
        <p class="author-detail">[Procedure] Patient</p>
    </div>
</div>
```

**Important:** Always get written consent before using patient testimonials.

---

## 6. Configure Contact Form

### Option A: Use EmailJS (Free)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create email service
3. Get Service ID, Template ID, and User ID
4. Update `js/main.js` (around line 147):

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    .then(function() {
        showMessage('success', 'Thank you! We will contact you within 24 hours.');
        contactForm.reset();
    });
```

### Option B: Use Form Backend Service

- **Formspree:** [formspree.io](https://formspree.io) - Free tier available
- **Basin:** [usebasin.com](https://usebasin.com)
- **Netlify Forms:** Built-in if using Netlify

---

## 7. Add Google Maps

### In contact.html (line 138):

Replace the placeholder with actual Google Maps embed:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your hospital/clinic
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace:

```html
<div class="map-placeholder">
    <!-- Replace this -->
</div>
```

With:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## 8. Customize Colors (Optional)

### In css/styles.css (lines 10-20):

```css
:root {
    --primary-color: #2563eb;     /* Main blue color */
    --primary-dark: #1e40af;      /* Darker blue for hover */
    --secondary-color: #059669;   /* Green for accents */
    --accent-color: #dc2626;      /* Red for alerts */
}
```

**Choose colors that match:**
- Hospital branding
- Professional medical appearance
- Good contrast for readability

---

## 9. Update URLs and Links

### In sitemap.xml:

Replace `https://yourwebsite.com/` with actual domain

### In all HTML files:

Update:
```html
<meta property="og:url" content="https://yourwebsite.com/">
```

---

## 10. Test Before Deployment

### Local Testing:

```bash
cd neurosurgeon-website
python -m http.server 8000
```

Open: `http://localhost:8000`

### Testing Checklist:

- [ ] All links work
- [ ] Images load correctly
- [ ] Contact form submits
- [ ] Mobile responsive (test with DevTools)
- [ ] No placeholder text remains
- [ ] All pages load quickly

---

## Support

If you need help:
1. Check if all placeholders are replaced
2. Validate HTML: [validator.w3.org](https://validator.w3.org/)
3. Test on different browsers
4. Review browser console for errors (F12)

---

## Next Steps

After customization:
1. Review DEPLOYMENT.md for hosting options
2. Test website thoroughly
3. Deploy to hosting platform
4. Submit to Google Search Console
5. Monitor analytics
