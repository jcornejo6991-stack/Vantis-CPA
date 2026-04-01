# Pre-Launch Performance Checklist

Complete this before deploying to production.

## Testing & Metrics

- [ ] Run Google Lighthouse audit (target: 95+ on all metrics)
  - Visit: https://developers.google.com/web/tools/lighthouse
  - Enter your domain
  - Record scores: Performance, Accessibility, Best Practices, SEO

- [ ] Test Core Web Vitals
  - Visit: https://web.dev/vitals/
  - Check LCP < 2.5s, FID < 100ms, CLS < 0.1

- [ ] Mobile-friendly test
  - Visit: https://search.google.com/test/mobile-friendly
  - Ensure "Mobile-friendly"

- [ ] Page speed test
  - Visit: https://pagespeed.web.dev/
  - Record speeds for desktop and mobile

## Image Optimization

- [ ] All images compressed
  - Tools: TinyPNG, ImageOptim, or GIMP
  - Target: < 200KB per image
  - Run Lighthouse to identify large images

- [ ] WebP format considered
  - Optional but recommended
  - Can reduce file size by 25-35%

- [ ] Lazy loading enabled
  - Add `loading="lazy"` to images below fold
  - Already configured in HTML templates

## Content & Assets

- [ ] No broken links
  - Run crawler or manually check key pages
  - Check 404 page displays correctly

- [ ] CSS/JS minified
  - Hugo `--minify` flag handles this
  - Verify in build output

- [ ] No console errors
  - Open DevTools > Console
  - Should show no errors or warnings
  - GA4 tracking should work

- [ ] Form submissions work
  - Test contact form
  - Verify Cloudflare Worker logs (if not using email yet)

## SEO & Indexing

- [ ] Sitemap.xml generates correctly
  - Visit: yoursite.com/sitemap.xml
  - Should list all pages

- [ ] Robots.txt in place
  - Visit: yoursite.com/robots.txt
  - Should allow crawlers

- [ ] Meta tags present
  - Run: https://www.seobywire.com/tools/meta-tag-checker/
  - Check: Title, description, Open Graph tags

- [ ] Structured data
  - Optional: Add JSON-LD schema for services
  - Test: https://schema.org/validator/

## Performance Configuration

- [ ] Caching headers configured
  - Assets: 1 year cache (immutable)
  - HTML: 1 hour cache
  - Check netlify.toml

- [ ] Compression enabled
  - Cloudflare auto-compresses (Gzip/Brotli)
  - Verify in Cloudflare dashboard

- [ ] HTTP/2 enabled
  - Cloudflare provides automatically
  - Verify in DevTools > Network

## Security Checklist

- [ ] Security headers present
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: strict-origin-when-cross-origin
  - Check netlify.toml

- [ ] HTTPS enforced
  - Cloudflare auto-provides SSL
  - Verify all links use HTTPS

- [ ] No sensitive data in code
  - Check for API keys, credentials
  - Should be in environment variables only

## Monitoring Setup

- [ ] Google Analytics 4 connected
  - Tracking code in place
  - Realtime view shows traffic

- [ ] Google Search Console configured
  - Sitemap submitted
  - Property verified

- [ ] Cloudflare analytics enabled
  - Dashboard shows traffic
  - Set up alerts for high traffic/errors

## Documentation

- [ ] README updated with current info
  - Check: docs/README.md

- [ ] Deployment docs reviewed
  - Check: docs/DEPLOYMENT.md

- [ ] Configuration guide available
  - Check: docs/CONFIGURATION.md

- [ ] Form setup documented
  - Check: docs/FORM-SETUP.md (when adding email)

## Final Verification

- [ ] All links work
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Mobile experience good
- [ ] Desktop experience good
- [ ] No console errors
- [ ] Performance metrics strong
- [ ] Security headers present

## Launch Readiness

Once all items checked:
1. ✅ Site is production-ready
2. ✅ Performance optimized
3. ✅ Security configured
4. ✅ Monitoring in place

**Ready to deploy!**
