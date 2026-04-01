// Integration setup for Cal.com, Stripe, GA4, etc.

document.addEventListener('DOMContentLoaded', function() {

  // Cal.com integration - embed widget
  setupCalcom();

  // Stripe integration - ready when needed
  if (window.location.pathname.includes('pricing') || window.location.pathname.includes('checkout')) {
    setupStripe();
  }

  // Analytics tracking
  trackPageView();
});

// Setup Cal.com booking widget
function setupCalcom() {
  const calcomLinks = document.querySelectorAll('a[href*="cal.com"]');
  calcomLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Optional: open in modal instead of new tab
      // e.preventDefault();
      // openCalcomModal(this.href);
    });
  });
}

// Setup Stripe payment processing
function setupStripe() {
  // Stripe will be loaded when payment page is accessed
  if (!window.Stripe) {
    console.warn('Stripe not loaded. Add Stripe.js to payment page.');
  }
}

// Track page view for analytics
function trackPageView() {
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title
    });
  }
}

// Track conversion goal
function trackConversion(goalName) {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      conversion_name: goalName
    });
  }
}

// Open Cal.com in modal (optional)
function openCalcomModal(url) {
  // This would require loading Cal.com widget
  console.log('Opening Cal.com modal:', url);
}
