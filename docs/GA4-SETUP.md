# Google Analytics 4 Setup

## Steps to Enable GA4:

1. **Create GA4 Property:**
   - Go to Google Analytics
   - Create a new GA4 property
   - Copy the Measurement ID (e.g., G-XXXXXXXXXX)

2. **Update Configuration:**
   - Edit `data/siteconfig.json`
   - Find: `"ga4Id": "G-XXXXXXXXXX"`
   - Replace with your actual GA4 ID

3. **Test Implementation:**
   - Run `hugo server`
   - Open site in browser
   - Open DevTools Console
   - Look for gtag initialization
   - Should see no errors

4. **Verify in Google Analytics:**
   - Go to GA4 dashboard
   - Wait 24-48 hours for data to appear
   - Check Realtime view while browsing site
   - Should see your pageviews

## Events to Track:
- page_view (automatic)
- form_submission (manual)
- conversion (manual)
