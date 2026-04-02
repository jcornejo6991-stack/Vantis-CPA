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

  // Send to Netlify function
  const endpoint = form.action || '/.netlify/functions/submit-form';

  fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (!response.ok) throw new Error('Form submission failed');
    return response.json();
  })
  .then(data => {
    showNotification('Thank you! We\'ll be in touch soon.');
    form.reset();
    trackEvent('form_submission', {form_name: form.id});
  })
  .catch(error => {
    showNotification('Error submitting form. Please try again.', 'error');
    console.error('Form error:', error);
  });
}
