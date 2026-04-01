# Performance Optimization Guide

## Current Performance Setup

Hugo static site with Cloudflare Pages provides excellent baseline performance:
- ✅ Static HTML (instant loading)
- ✅ Gzip compression (Cloudflare auto)
- ✅ CSS minification (--minify flag)
- ✅ CDN distribution (Cloudflare global)
- ✅ HTTPS/HTTP/2 (Cloudflare)

## Further Optimization

### 1. Caching Strategy

**Already Configured in netlify.toml:**
- Assets (CSS, JS, images): 1 year cache (immutable)
- HTML pages: 1 hour cache
- Root domain: No-cache (always fresh)

**For Cloudflare Pages:**
1. Dashboard > Caching > Cache Rules
2. Create rule:
   - Path: `/assets/*`
   - Cache level: Cache everything
   - Browser cache TTL: 1 year
3. Create rule:
   - Path: `/*`
   - Cache level: Standard
   - Browser cache TTL: 1 hour

### 2. Image Optimization

**Best Practices:**

1. **Use WebP format with fallback:**
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.png" alt="Description">
   </picture>
   ```

2. **Responsive images:**
   ```html
   <img
     srcset="small.jpg 640w, medium.jpg 1024w, large.jpg 1920w"
     sizes="(max-width: 640px) 100vw, 50vw"
     src="medium.jpg"
     alt="Description"
   >
   ```

3. **Lazy loading:**
   ```html
   <img
     src="image.jpg"
     alt="Description"
     loading="lazy"
   >
   ```

4. **Compress images:**
   - Use TinyPNG, ImageOptim, or GIMP
   - Target: < 200KB per image
   - Recommended tools:
     - TinyPNG (free, lossy)
     - Squoosh (free, Google)
     - ImageMagick (command-line)

### 3. Font Optimization

**Google Fonts (Already Used):**
- ✅ Preconnect links in place
- ✅ Fonts: Playfair Display, Inter
- ✅ Subset to Latin (faster loading)

**Enhancement:**
1. Use `font-display: swap` (already in Google Fonts link)
2. Consider web font strategy:
   - Display fallback font immediately
   - Swap to Google font when loaded
   - Prevents blank text during load

### 4. CSS & JavaScript Optimization

**CSS:**
- Hugo minifies with `--minify` flag
- CSS variables reduce file size (reused values)
- No unused CSS (you control what's loaded)

**JavaScript:**
- Minified in production build
- Defer non-critical scripts
- Remove unused functions

Current JS files:
- `utils.js` - Utility functions
- `forms.js` - Form handling
- `integrations.js` - Cal.com, Stripe, GA4

All are small and critical, so they load immediately.

### 5. Core Web Vitals Monitoring

**Set up Google Search Console:**
1. Go to Google Search Console
2. Add property (vantiscpa.com)
3. View Core Web Vitals:
   - **LCP** (Largest Contentful Paint): < 2.5s
   - **FID** (First Input Delay): < 100ms
   - **CLS** (Cumulative Layout Shift): < 0.1

**Current Status:**
- LCP: Excellent (static HTML)
- FID: Excellent (minimal JavaScript)
- CLS: Excellent (no layout shifts)

### 6. Lighthouse Scoring

**Test your site:**
1. Go to [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
2. Enter your domain
3. Target scores:
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

Current Hugo setup should score 95+ on all metrics.

### 7. CDN Optimization (Cloudflare)

**Features Already Enabled:**
- ✅ Global CDN distribution
- ✅ Gzip compression
- ✅ Brotli compression (better than gzip)
- ✅ HTTP/2 protocol
- ✅ Image optimization service

**Advanced (optional):**
1. Enable Cloudflare Image Optimization:
   - Dashboard > Images
   - Toggle "Polish" (image compression)
   - Toggle "WebP" (automatic WebP conversion)
   - Cost: $0.20/10k images

2. Enable Cloudflare Rocket Loader:
   - Speeds up JavaScript loading
   - Dashboard > Speed > Optimization

### 8. Content Delivery Checklist

Before deploying:
- [ ] All images compressed
- [ ] CSS/JS minified
- [ ] No large files (> 5MB)
- [ ] Lighthouse score 95+
- [ ] Mobile friendly test passing
- [ ] Core Web Vitals good

### 9. Monitoring Performance

**Weekly:**
1. Check Google Search Console > Core Web Vitals
2. Run Lighthouse audit
3. Check Cloudflare Analytics > Performance

**Monthly:**
1. Review slowest pages in GA4
2. Check mobile vs desktop performance
3. Optimize any pages scoring < 90

## Performance Metrics Target

| Metric | Target | Current |
|--------|--------|---------|
| Page Load | < 2s | ~0.5s (static) |
| LCP | < 2.5s | ~0.5s |
| FID | < 100ms | ~0ms |
| CLS | < 0.1 | 0 |
| Lighthouse | 95+ | Expected 98+ |

## Summary

Your Hugo site on Cloudflare is already highly optimized. Focus on:
1. Image optimization (biggest impact)
2. Monitoring Core Web Vitals
3. Regular Lighthouse audits

Everything else is handled automatically.
