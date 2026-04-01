/**
 * Cloudflare Worker for handling form submissions
 * Sends form data to info@vantiscpa.com via Google Gmail API or configured email service
 */

export default {
  async fetch(request, env, ctx) {
    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    try {
      const data = await request.json();

      // Validate required fields
      if (!data.name || !data.email || !data.background) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Check if email credentials are configured
      const GOOGLE_API_KEY = env.GOOGLE_API_KEY;
      const GOOGLE_REFRESH_TOKEN = env.GOOGLE_REFRESH_TOKEN;

      if (!GOOGLE_API_KEY || !GOOGLE_REFRESH_TOKEN) {
        // Email not configured yet - store submission locally
        // In production, you would store this in a database (D1, KV store, etc.)
        console.log('Email not configured. Form submission received:', data);

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Form received. Email notifications will be enabled once credentials are configured.',
            submissionId: crypto.randomUUID()
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }

      // Send email to info@vantiscpa.com
      const emailSent = await sendEmail(data, GOOGLE_API_KEY, GOOGLE_REFRESH_TOKEN);

      if (emailSent) {
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Form submitted successfully. We will contact you soon!'
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } else {
        return new Response(
          JSON.stringify({ error: 'Failed to send email' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      return new Response(
        JSON.stringify({ error: 'Server error: ' + error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  },
};

/**
 * Send email via Google Gmail API
 * Requires GOOGLE_API_KEY and GOOGLE_REFRESH_TOKEN in Cloudflare environment variables
 */
async function sendEmail(data, apiKey, refreshToken) {
  try {
    // Get fresh access token using refresh token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: apiKey,
        client_secret: refreshToken,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error('Failed to get access token:', tokenData);
      return false;
    }

    // Create email message
    const emailBody = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Background: ${data.background}

---
This submission came from your website contact form.
    `.trim();

    const message = Buffer.from(
      `To: info@vantiscpa.com\r\nSubject: New Form Submission from ${data.name}\r\n\r\n${emailBody}`
    ).toString('base64');

    // Send via Gmail API
    const sendResponse = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: message }),
    });

    return sendResponse.ok;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}
