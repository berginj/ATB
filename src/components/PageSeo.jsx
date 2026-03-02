import { useEffect } from "react";
import { absoluteUrl, SITE_NAME } from "../lib/site";

function ensureMeta(selectorKey, selectorValue) {
  let tag = document.head.querySelector(`meta[${selectorKey}="${selectorValue}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(selectorKey, selectorValue);
    document.head.appendChild(tag);
  }

  return tag;
}

function ensureLink(rel) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  return tag;
}

function PageSeo({
  title,
  description,
  path = "/",
  robots = "index,follow",
  schema
}) {
  const canonicalUrl = absoluteUrl(path);
  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const schemaKey = JSON.stringify(schemaItems);

  useEffect(() => {
    document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    ensureMeta("name", "description").setAttribute("content", description);
    ensureMeta("name", "robots").setAttribute("content", robots);
    ensureMeta("property", "og:title").setAttribute("content", title);
    ensureMeta("property", "og:description").setAttribute("content", description);
    ensureMeta("property", "og:type").setAttribute("content", "website");
    ensureMeta("property", "og:url").setAttribute("content", canonicalUrl);
    ensureMeta("name", "twitter:card").setAttribute("content", "summary");
    ensureMeta("name", "twitter:title").setAttribute("content", title);
    ensureMeta("name", "twitter:description").setAttribute("content", description);

    ensureLink("canonical").setAttribute("href", canonicalUrl);

    document.head
      .querySelectorAll('script[data-seo-schema="true"]')
      .forEach((tag) => tag.remove());

    schemaItems.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [title, description, canonicalUrl, robots, schemaKey]);

  return null;
}

export default PageSeo;
