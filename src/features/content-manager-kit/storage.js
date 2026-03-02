import manifest from "./manifest";
import siteTemplates from "../../config/content-manager-templates";
import defaultManagedContent from "../../content/defaultManagedContent";

export const CONTENT_MANAGER_STORAGE_EVENT = "atb:content-manager-updated";

const STORAGE_KEY = `atb-content-manager:${manifest.version}`;

const templatesById = siteTemplates.reduce((accumulator, template) => {
  accumulator[template.id] = template;
  return accumulator;
}, {});

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function normalizeTags(tags) {
  if (Array.isArray(tags)) {
    return tags.filter(Boolean);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function safeNumber(value, fallbackValue) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallbackValue;
}

function buildTimestamp() {
  return new Date().toISOString();
}

export function createContentItem(template, overrides = {}) {
  const templateDefaults = template?.defaults || {};
  const timestamp = buildTimestamp();

  return {
    id:
      overrides.id ||
      `${template?.type || "custom"}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    templateId: overrides.templateId || template?.id || "custom-item",
    templateLabel: overrides.templateLabel || template?.label || "Custom Item",
    type: overrides.type || template?.type || "custom",
    title: overrides.title || templateDefaults.title || "",
    body: overrides.body || templateDefaults.body || "",
    status: overrides.status || templateDefaults.status || "draft",
    priority: safeNumber(
      overrides.priority,
      safeNumber(templateDefaults.priority, 50)
    ),
    startDate: overrides.startDate || templateDefaults.startDate || "",
    endDate: overrides.endDate || templateDefaults.endDate || "",
    linkUrl: overrides.linkUrl || templateDefaults.linkUrl || "",
    imageUrl: overrides.imageUrl || templateDefaults.imageUrl || "",
    actionLabel: overrides.actionLabel || "Learn More",
    tags: normalizeTags(overrides.tags || templateDefaults.tags),
    notifyComms:
      typeof overrides.notifyComms === "boolean"
        ? overrides.notifyComms
        : Boolean(templateDefaults.notifyComms),
    updatedAt: overrides.updatedAt || timestamp,
    updatedBy: overrides.updatedBy || "ATB content manager"
  };
}

function normalizeItem(item) {
  const template = templatesById[item.templateId];

  return createContentItem(template, item);
}

function buildDefaultDocument() {
  return {
    items: defaultManagedContent.map((item) => normalizeItem(item)),
    updatedAt: buildTimestamp(),
    updatedBy: "ATB site seed"
  };
}

function dispatchContentManagerUpdate() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(CONTENT_MANAGER_STORAGE_EVENT));
}

export function loadContentDocument() {
  const defaultDocument = buildDefaultDocument();

  if (!canUseStorage()) {
    return defaultDocument;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDocument));
    return defaultDocument;
  }

  try {
    const parsed = JSON.parse(rawValue);

    if (!Array.isArray(parsed.items)) {
      throw new Error("Invalid content document");
    }

    return {
      items: parsed.items.map((item) => normalizeItem(item)),
      updatedAt: parsed.updatedAt || buildTimestamp(),
      updatedBy: parsed.updatedBy || "ATB content manager"
    };
  } catch (error) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDocument));
    return defaultDocument;
  }
}

export function saveContentDocument(document, actor = "ATB content manager") {
  const nextDocument = {
    items: document.items.map((item) => normalizeItem(item)),
    updatedAt: buildTimestamp(),
    updatedBy: actor
  };

  if (canUseStorage()) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDocument));
    dispatchContentManagerUpdate();
  }

  return nextDocument;
}

export function resetContentDocument() {
  const nextDocument = buildDefaultDocument();

  if (canUseStorage()) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDocument));
    dispatchContentManagerUpdate();
  }

  return nextDocument;
}

export function importContentDocument(rawDocument, actor = "ATB content manager") {
  const parsed = typeof rawDocument === "string" ? JSON.parse(rawDocument) : rawDocument;

  if (!parsed || !Array.isArray(parsed.items)) {
    throw new Error("Imported content must include an items array.");
  }

  return saveContentDocument(
    {
      items: parsed.items
    },
    actor
  );
}

function isWithinWindow(item, now) {
  if (item.startDate) {
    const start = new Date(item.startDate);
    if (!Number.isNaN(start.valueOf()) && start > now) {
      return false;
    }
  }

  if (item.endDate) {
    const end = new Date(item.endDate);
    if (!Number.isNaN(end.valueOf()) && end < now) {
      return false;
    }
  }

  return true;
}

export function getActiveContentItems(document, limit = 6) {
  const now = new Date();

  return document.items
    .filter((item) => item.status === "active")
    .filter((item) => isWithinWindow(item, now))
    .sort((left, right) => {
      if (left.priority !== right.priority) {
        return left.priority - right.priority;
      }

      return right.updatedAt.localeCompare(left.updatedAt);
    })
    .slice(0, limit);
}

export function summarizeContentDocument(document) {
  return document.items.reduce(
    (accumulator, item) => {
      accumulator.total += 1;

      if (item.status === "active") {
        accumulator.active += 1;
      } else if (item.status === "draft") {
        accumulator.draft += 1;
      } else {
        accumulator.archived += 1;
      }

      return accumulator;
    },
    {
      total: 0,
      active: 0,
      draft: 0,
      archived: 0
    }
  );
}

export { templatesById, STORAGE_KEY };
