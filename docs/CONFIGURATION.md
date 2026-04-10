# Configuration Guide

All site settings are in **one file**: `data/siteconfig.json`

## Changing Company Info

Edit `data/siteconfig.json`:

```json
{
  "company": {
    "name": "Your CPA Firm Name",
    "phone": "+1234567890",
    "email": "contact@example.com",
    "address": "City, State"
  }
}
```

Changes appear immediately everywhere on the site.

## Changing Colors

Edit the `branding.colors` section:

```json
{
  "branding": {
    "colors": {
      "primary": "#15482E",          // Main color
      "accent": "#3a8b5f",           // Accent color
      "textDark": "#0f2818",         // Text color
      "bgLight": "#f9faf9"           // Background
    }
  }
}
```

## Changing Fonts

Edit the `branding.fonts` section:

```json
{
  "branding": {
    "fonts": {
      "heading": "Playfair Display",
      "body": "Inter"
    }
  }
}
```

Available Google Fonts: Just add their exact names.

## Updating Navigation

Edit the `navigation` arrays:

```json
{
  "navigation": {
    "main": [
      {"label": "Home", "url": "/"},
      {"label": "Your Link", "url": "/path/"}
    ],
    "expertise": [
      {"label": "Your Page", "url": "/expertise/page/"}
    ]
  }
}
```

## Setting Up Google Analytics

Edit `integrations.analytics`:

```json
{
  "integrations": {
    "analytics": {
      "ga4Id": "G-YOUR_GA4_ID_HERE"
    }
  }
}
```

Then set up in Google Analytics:
1. Create GA4 property
2. Copy Measurement ID
3. Paste here
4. Done!

## Setting Up Cal.com Booking

Edit `integrations.calcom`:

```json
{
  "integrations": {
    "calcom": "your-username/consultation"
  }
}
```

## Setting Up Stripe

Edit `integrations.stripe`:

```json
{
  "integrations": {
    "stripe": {
      "publicKey": "pk_live_YOUR_STRIPE_PUBLIC_KEY"
    }
  }
}
```

Then load Stripe.js on payment pages.

## That's All!

Change ONE JSON file = updates everywhere on the site.
No code knowledge required.
