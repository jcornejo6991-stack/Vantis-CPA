// Form handling and validation

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form[id*="Form"]');

  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);

    // Add real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', validateField);
    });
  });
});

function validateField(e) {
  const field = e.target;
  let isValid = true;

  if (field.name === 'email') {
    isValid = isValidEmail(field.value);
    field.style.borderColor = isValid ? '' : '#d32f2f';
  } else if (field.required && !field.value.trim()) {
    isValid = false;
    field.style.borderColor = '#d32f2f';
  } else {
    field.style.borderColor = '';
  }

  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Validate all fields
  let isFormValid = true;
  form.querySelectorAll('input, textarea').forEach(field => {
    if (!validateField({target: field})) {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    showNotification('Please fill in all required fields correctly', 'error');
    return;
  }

  // Send to Formspree or fallback endpoint
  const endpoint = form.action || '/.netlify/functions/submit-form';
  const isFormspree = endpoint.includes('formspree.io');

  fetch(endpoint, {
    method: 'POST',
    body: isFormspree ? formData : JSON.stringify(Object.fromEntries(formData)),
    headers: isFormspree ? {} : { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (!response.ok) throw new Error('Form submission failed');
    return isFormspree ? response.text() : response.json();
  })
  .then(data => {
    showSuccessModal();
    form.reset();
    trackEvent('form_submission', {form_name: form.id});
  })
  .catch(error => {
    showNotification('Error submitting form. Please try again.', 'error');
    console.error('Form error:', error);
  });
}

function showSuccessModal() {
  // Create modal if it doesn't exist
  let modal = document.getElementById('formSuccessModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'formSuccessModal';
    modal.innerHTML = `
      <div class="modal-overlay" onclick="document.getElementById('formSuccessModal').classList.remove('visible')">
        <div class="modal-content" onclick="event.stopPropagation()">
          <div class="modal-icon">✓</div>
          <h3 class="modal-title">Thank You!</h3>
          <p class="modal-message">We've received your information and will be in touch within 24 hours.</p>
          <button class="modal-button" onclick="document.getElementById('formSuccessModal').classList.remove('visible')">Got It</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Add modal styles if not already present
    if (!document.getElementById('formSuccessModalStyles')) {
      const style = document.createElement('style');
      style.id = 'formSuccessModalStyles';
      style.textContent = `
        #formSuccessModal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10000;
        }
        #formSuccessModal.visible {
          display: flex;
        }
        .modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .modal-content {
          background: white;
          border-radius: 8px;
          padding: 40px 32px;
          max-width: 400px;
          text-align: center;
          cursor: default;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .modal-icon {
          font-size: 48px;
          color: #10b981;
          margin-bottom: 16px;
          line-height: 1;
        }
        .modal-title {
          margin: 0 0 8px;
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
        }
        .modal-message {
          margin: 0 0 24px;
          font-size: 16px;
          color: #6b7280;
          line-height: 1.5;
        }
        .modal-button {
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 10px 24px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }
        .modal-button:hover {
          background: #2563eb;
        }
      `;
      document.head.appendChild(style);
    }
  }
  modal.classList.add('visible');
}
