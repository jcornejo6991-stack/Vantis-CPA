(function () {
  const GEO_ENABLED = true; // set to false to disable without removing this file

  if (!GEO_ENABLED) return;

  // ─── Copy map ───────────────────────────────────────────────────────────────
  // Keys match the URL slug for each expertise or service page.
  // us:   shown to US visitors (location = state name, e.g. "Texas")
  // intl: shown to international visitors (location = country name, e.g. "Thailand")
  // null: intentionally blank for that visitor type — no line shown
  const GEO_COPY = {
    // Expertise pages
    local:       { us: "Serving local businesses in {location}",                           intl: null },
    expats:      { us: "Serving U.S. expats originally from {location}",                   intl: "Serving U.S. expats living in {location}" },
    outbound:    { us: "Serving U.S. individuals and businesses in {location}",            intl: "Serving U.S. individuals and businesses operating in {location}" },
    founders:    { us: "Serving founders and startups in {location}",                      intl: "Serving founders and online businesses in {location}" },
    inbound:     { us: null,                                                                intl: "Serving foreign investors from {location} entering the U.S." },
    realestate:  { us: "Serving real estate owners in {location}",                         intl: "Serving U.S. real estate owners based in {location}" },
    // Services pages
    "tax-strategy":      { us: "Helping businesses in {location} reduce their tax burden", intl: "Helping clients in {location} optimize their U.S. tax strategy" },
    "tax-compliance":    { us: "Trusted tax compliance for businesses in {location}",       intl: "U.S. tax compliance for clients in {location}" },
    "international-tax": { us: null,                                                         intl: "International tax expertise for clients in {location}" },
    "back-office":       { us: "Back-office support for businesses in {location}",          intl: "Remote back-office support for businesses in {location}" },
    bookkeeping:         { us: "Bookkeeping for businesses in {location}",                  intl: "Bookkeeping support for clients in {location}" },
    payroll:             { us: "Payroll services for businesses in {location}",             intl: "U.S. payroll support for teams in {location}" },
    "sales-tax":         { us: "Sales tax compliance for businesses in {location}",         intl: null },
  };

  // ─── Helpers ────────────────────────────────────────────────────────────────

  // Derive the page slug from the URL path.
  // /expertise/expats/  → "expats"
  // /services/tax-strategy/ → "tax-strategy"
  function getSlug() {
    var parts = window.location.pathname.replace(/\/+$/, '').split('/');
    return parts[parts.length - 1] || '';
  }

  // Fetch with a hard timeout (ms). Returns a Promise.
  function fetchWithTimeout(url, ms) {
    var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = controller
      ? setTimeout(function () { controller.abort(); }, ms)
      : null;
    var opts = controller ? { signal: controller.signal } : {};
    return fetch(url, opts).then(function (res) {
      if (timer) clearTimeout(timer);
      return res;
    });
  }

  // ─── Main ───────────────────────────────────────────────────────────────────

  var el = document.querySelector('[data-geo-line]');
  if (!el) return; // not a service/expertise page

  var slug = getSlug();
  var copy = GEO_COPY[slug];
  if (!copy) return; // page not in our map

  function applyGeo(geoData) {
    var isUS = geoData.isUS;
    var location = isUS ? geoData.region : geoData.country;
    if (!location) return;

    var template = isUS ? copy.us : copy.intl;
    if (!template) return; // intentionally blank for this visitor type

    el.textContent = template.replace('{location}', location);
    el.style.display = '';
  }

  // Try sessionStorage cache first
  try {
    var cached = sessionStorage.getItem('vantis_geo');
    if (cached) {
      applyGeo(JSON.parse(cached));
      return;
    }
  } catch (e) { /* sessionStorage blocked — continue to fetch */ }

  // Fetch from ip-api (free tier, no key required, 1,000 req/min)
  fetchWithTimeout('https://ip-api.com/json/?fields=status,country,countryCode,regionName', 3000)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data.status !== 'success') return;
      var geoData = {
        country: data.country || '',
        region:  data.regionName || '',
        isUS:    data.countryCode === 'US',
      };
      try { sessionStorage.setItem('vantis_geo', JSON.stringify(geoData)); } catch (e) {}
      applyGeo(geoData);
    })
    .catch(function () { /* API unreachable — silently do nothing */ });

})();
