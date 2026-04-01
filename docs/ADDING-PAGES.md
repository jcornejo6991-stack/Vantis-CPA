# Adding New Pages

## Quick Start (5 minutes)

### Add an Expertise Page
1. Create file: `content/expertise/your-page.md`
2. Add front matter:
   ```markdown
   ---
   title: "Your Expertise Title"
   description: "Brief description"
   specializations:
     - {label: "Specialization 1", url: "/expertise/your-page/"}
   services:
     - {label: "Service 1", url: "/services/tax-strategy/"}
   otherAudiences:
     - {label: "Other Page", url: "/expertise/local/"}
   ---

   Write your page content here in markdown.
   ```
3. Push to GitHub
4. Cloudflare auto-builds and deploys

### Add a Service Page
1. Create file: `content/services/your-service.md`
2. Add front matter:
   ```markdown
   ---
   title: "Your Service Name"
   description: "Service description"
   includes:
     - "Feature 1"
     - "Feature 2"
   ---

   Write service details here.
   ```
3. Push to GitHub
4. Done!

## Update Navigation (Optional)
If you want your page in the nav menu:
1. Edit `data/site-config.json`
2. Add to appropriate nav array:
   ```json
   {"label": "Your Page Name", "url": "/your-page/"}
   ```
3. Navigation updates everywhere automatically

## File Structure

```
content/
├── expertise/
│   ├── _index.md (hub page)
│   └── your-page.md (new page)
├── services/
│   ├── _index.md (hub page)
│   └── your-service.md (new page)
└── legal/
    └── your-page.md
```

## Markdown Tips

- Use `#` for headings (h1), `##` for h2, etc.
- Use `**bold**` for bold text
- Use `_italic_` for italic text
- Use `[link text](url)` for links
- Use `- item` for bullet lists
- Leave blank lines between sections

## That's It!

Everything else (styling, layout, SEO, analytics) is handled automatically by Hugo and the configuration.
