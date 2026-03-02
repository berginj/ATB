export const SITE_NAME = "Arlington Travel Baseball";
export const SITE_ORIGIN = (
  import.meta.env.VITE_SITE_ORIGIN || "https://arlingtontravelbaseball.org"
).replace(/\/$/, "");
export const SITE_EMAIL = "atbarsenal@gmail.com";
export const SITE_PHONE = "+1-703-679-7756";
export const SITE_CITY = "Arlington";
export const SITE_REGION = "VA";
export const INSTAGRAM_URL =
  import.meta.env.VITE_INSTAGRAM_PROFILE_URL || "https://www.instagram.com/atb_arsenal/";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalizedPath}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CITY,
      addressRegion: SITE_REGION,
      postalCode: "22207",
      streetAddress: "PO Box 7088",
      addressCountry: "US"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Arlington"
      },
      {
        "@type": "AdministrativeArea",
        name: "Northern Virginia"
      }
    ],
    sameAs: [INSTAGRAM_URL]
  };
}

export function webPageSchema({ path, title, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: absoluteUrl(path),
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_ORIGIN
    }
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
