// Utility functions for the website

// Get data from site config (usage: CONFIG.company.name)
const CONFIG = window.__CONFIG__ || {};

// Format phone number
function formatPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+1(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }
  return phone;
}

// Scroll to element smoothly
function smoothScroll(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Track event for analytics
function trackEvent(eventName, eventData = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, eventData);
  }
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    background: ${type === 'success' ? '#3a8b5f' : '#d32f2f'};
    color: white;
    border-radius: 4px;
    z-index: 1000;
    animation: slideIn 0.3s ease-in-out;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Validate email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Format date
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
