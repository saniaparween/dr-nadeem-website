/**
 * NEUROSURGEON WEBSITE - MAIN JAVASCRIPT
 * Lightweight, vanilla JS for interactive features
 */

// ==========================================
// MOBILE NAVIGATION TOGGLE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ==========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ==========================================
// LAZY LOADING FOR IMAGES
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
});

// ==========================================
// CONTACT FORM VALIDATION & SUBMISSION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                concern: document.getElementById('concern').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!validateForm(formData)) {
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual backend integration)
            setTimeout(function() {
                showMessage('success', 'Thank you! We will contact you within 24 hours.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);

            // For production, use actual form submission:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     showMessage('success', 'Thank you! We will contact you within 24 hours.');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     showMessage('error', 'Something went wrong. Please try again or call us directly.');
            // })
            // .finally(() => {
            //     submitBtn.textContent = originalText;
            //     submitBtn.disabled = false;
            // });
        });
    }
});

// Form validation helper
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;

    if (data.name.trim().length < 2) {
        showMessage('error', 'Please enter a valid name.');
        return false;
    }

    if (!phoneRegex.test(data.phone)) {
        showMessage('error', 'Please enter a valid phone number.');
        return false;
    }

    if (!emailRegex.test(data.email)) {
        showMessage('error', 'Please enter a valid email address.');
        return false;
    }

    if (!data.concern) {
        showMessage('error', 'Please select your medical concern.');
        return false;
    }

    if (data.message.trim().length < 10) {
        showMessage('error', 'Please provide more details about your concern.');
        return false;
    }

    return true;
}

// Show form message
function showMessage(type, text) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.className = 'form-message ' + type;
        messageDiv.textContent = text;
        messageDiv.style.display = 'block';

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(function() {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// ==========================================
// FADE-IN ANIMATION ON SCROLL
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.info-card, .spec-card, .testimonial-card, .experience-card');

    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(element => {
            element.style.opacity = '0';
            fadeObserver.observe(element);

            // Add listener for animation end to restore opacity
            element.addEventListener('animationend', function() {
                this.style.opacity = '1';
            });
        });
    }
});

// ==========================================
// PHONE NUMBER FORMATTING
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove all non-numeric characters
            let value = e.target.value.replace(/\D/g, '');

            // Format as needed (basic example)
            if (value.length > 10) {
                value = value.substring(0, 10);
            }

            e.target.value = value;
        });
    }
});

// ==========================================
// BACK TO TOP BUTTON (Optional Enhancement)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color, #2563eb);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 999;
    `;

    document.body.appendChild(backToTop);

    // Show/hide based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==========================================
// PAGE LOAD PERFORMANCE TRACKING
// ==========================================
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        // Log performance (can be sent to analytics)
        console.log('Page load time:', pageLoadTime + 'ms');

        // Warn if page load is slow
        if (pageLoadTime > 3000) {
            console.warn('Page load time is above 3 seconds. Consider optimizing images and assets.');
        }
    }
});

// ==========================================
// ACCESSIBILITY: Skip to main content
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link at the beginning of body if not exists
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link sr-only';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            padding: 1rem;
            background: var(--primary-color, #2563eb);
            color: white;
            z-index: 9999;
        `;

        skipLink.addEventListener('focus', function() {
            this.classList.remove('sr-only');
        });

        skipLink.addEventListener('blur', function() {
            this.classList.add('sr-only');
        });

        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});
