import { CONFIG } from "./config.js";

export function initAnalytics() {
  const { provider, domainOrId, scriptUrl } = CONFIG.analytics;
  if (!domainOrId || !scriptUrl || provider === "none") return;
  const s = document.createElement("script");
  s.defer = true;
  s.src = scriptUrl;
  if (provider === "plausible") s.dataset.domain = domainOrId;
  else if (provider === "umami") s.dataset.websiteId = domainOrId;
  document.body.appendChild(s);
}

export function trackEvent(event, props = {}) {
  window.__astauEvents = window.__astauEvents || [];
  window.__astauEvents.push({ event, props, timestamp: Date.now() });
  if (typeof window.plausible === "function") window.plausible(event, { props });
  else if (typeof window.umami?.track === "function") window.umami.track(event, props);
}

export function initDeclarativeTracking() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-track]");
    if (!el) return;
    const props = {};
    if (el.dataset.trackLocation) props.ubicacion = el.dataset.trackLocation;
    if (el.dataset.trackPractice) props.practica = el.dataset.trackPractice;
    trackEvent(el.dataset.track, props);
  });
}
