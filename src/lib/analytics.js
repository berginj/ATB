function trackWithGtag(name, params) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

function trackWithDataLayer(name, params) {
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: name,
      ...params
    });
  }
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") {
    return;
  }

  trackWithGtag(name, params);
  trackWithDataLayer(name, params);
}
