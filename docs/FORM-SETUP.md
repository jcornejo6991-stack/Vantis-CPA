# Form Handling Setup

## Current Status

Form handling infrastructure is ready and deployed to Cloudflare Workers. Forms will:
1. Accept submissions from the website
2. Store them locally until email is configured
3. Send emails once Google credentials are added

## Setting Up Google Email (info@vantiscpa.com)

### Step 1: Create Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project called "Vantis CPA Website"
3. Enable Gmail API:
   - Go to "APIs & Services" > "Library"
   - Search for "Gmail API"
   - Click "Enable"

### Step 2: Create Service Account Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in:
   - Service account name: `vantis-cpa-forms`
   - Click "Create and Continue"
4. Grant roles:
   - Click "Continue" (skip optional)
5. Create key:
   - Click "Create Key" > "JSON"
   - Download the JSON file (save it securely)

### Step 3: Enable Service Account to Send from Gmail

1. Share your Gmail account access with the service account:
   - In your Gmail account, go to Settings
   - Enable "Less secure app access" or use Gmail App Passwords
   - Alternative: Use OAuth with your personal account

### Step 4: Add Credentials to Cloudflare

1. Go to Cloudflare Dashboard > Workers > Settings
2. Add environment variables:
   - `GOOGLE_API_KEY`: From the JSON file, use `client_id`
   - `GOOGLE_REFRESH_TOKEN`: From the JSON file, use `private_key`
3. Save

### Step 5: Test

1. Submit a form on your website
2. Check info@vantiscpa.com for the submission email

## Form Fields

The contact form submits:
- `name` - User's name
- `email` - User's email address
- `background` - Brief description of their situation

## Storage Without Email

Before email is configured, form submissions are logged in Cloudflare Worker logs. You can view them in:
- Cloudflare Dashboard > Workers > Logs

## Alternative Email Services

If you want to use a different email service later, update the `sendEmail()` function in `functions/submit-form.js` to use their API instead.

Options:
- SendGrid
- Mailgun
- Resend
- AWS SES

## Troubleshooting

**Forms not sending emails:**
1. Check Cloudflare Worker logs for errors
2. Verify environment variables are set
3. Verify Google credentials are correct
4. Check info@vantiscpa.com spam folder

**Credentials not working:**
1. Ensure Gmail API is enabled in Google Cloud
2. Verify service account has correct permissions
3. Check token isn't expired

## Form Submission Flow

```
User submits form
    ↓
Cloudflare Worker receives request
    ↓
Validates form data
    ↓
Checks if email credentials configured
    ├─ Yes → Send email via Gmail API → Return success
    └─ No → Log submission locally → Return success
```
