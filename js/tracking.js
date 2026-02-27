// Conversion Tracking for Core Hood Cleaning

// Track phone number clicks
document.addEventListener('DOMContentLoaded', function() {
    // Track all phone links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // GA4 event tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call_click', {
                    'event_category': 'engagement',
                    'event_label': 'Phone: ' + this.href.replace('tel:', ''),
                    'value': 1
                });
            }

            // Console log for debugging
            console.log('Phone click tracked:', this.href);
        });
    });

    // Track booking button clicks
    const bookingButtons = document.querySelectorAll('a[href*="leadconnectorhq.com"]');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'booking_button_click', {
                    'event_category': 'conversion',
                    'event_label': 'Booking Widget',
                    'value': 1
                });
            }

            console.log('Booking button tracked');
        });
    });

    // Track form submissions
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'conversion',
                    'event_label': 'Contact Form',
                    'value': 1
                });
            }

            console.log('Form submission tracked');
        });
    }

    // Track scroll depth (engagement metric)
    let scrollTracked = {
        '25': false,
        '50': false,
        '75': false,
        '100': false
    };

    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        Object.keys(scrollTracked).forEach(threshold => {
            if (scrollPercent >= parseInt(threshold) && !scrollTracked[threshold]) {
                scrollTracked[threshold] = true;

                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        'event_category': 'engagement',
                        'event_label': threshold + '%',
                        'value': parseInt(threshold)
                    });
                }
            }
        });
    });
});
