import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "../../lib/analytics";
import manifest from "./manifest";
import {
  createContentItem,
  importContentDocument,
  loadContentDocument,
  resetContentDocument,
  saveContentDocument,
  summarizeContentDocument
} from "./storage";
import ContentManagerAlert from "./ContentManagerAlert";

function getSelectedItem(document, selectedId) {
  return document.items.find((item) => item.id === selectedId) || null;
}

function ContentManagerWorkspace({ templates }) {
  const [document, setDocument] = useState(() => loadContentDocument());
  const [selectedId, setSelectedId] = useState(() => loadContentDocument().items[0]?.id || null);
  const [importValue, setImportValue] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!selectedId && document.items[0]) {
      setSelectedId(document.items[0].id);
      return;
    }

    if (selectedId && !document.items.some((item) => item.id === selectedId)) {
      setSelectedId(document.items[0]?.id || null);
    }
  }, [document, selectedId]);

  const selectedItem = useMemo(
    () => getSelectedItem(document, selectedId),
    [document, selectedId]
  );
  const summary = useMemo(() => summarizeContentDocument(document), [document]);
  const exportValue = useMemo(() => JSON.stringify(document, null, 2), [document]);

  function commitDocument(nextDocument, actor, successMessage) {
    const savedDocument = saveContentDocument(nextDocument, actor);
    setDocument(savedDocument);
    setFeedback(successMessage);
  }

  function handleCreate(template) {
    const item = createContentItem(template, {
      status: "draft",
      updatedBy: "ATB content manager"
    });

    commitDocument(
      {
        ...document,
        items: [item, ...document.items]
      },
      "ATB content manager",
      `${template.label} created.`
    );
    setSelectedId(item.id);
    trackEvent("content_manager_item_created", {
      template_id: template.id
    });
  }

  function handleItemChange(field, value) {
    if (!selectedItem) {
      return;
    }

    const nextItems = document.items.map((item) => {
      if (item.id !== selectedItem.id) {
        return item;
      }

      if (field === "tags") {
        return {
          ...item,
          tags: value
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          updatedAt: new Date().toISOString(),
          updatedBy: "ATB content manager"
        };
      }

      return {
        ...item,
        [field]: field === "priority" ? Number(value) || 50 : value,
        updatedAt: new Date().toISOString(),
        updatedBy: "ATB content manager"
      };
    });

    setDocument({
      ...document,
      items: nextItems
    });
  }

  function handleSaveSelected() {
    if (!selectedItem) {
      return;
    }

    commitDocument(document, "ATB content manager", "Changes saved in this browser.");
    trackEvent("content_manager_item_saved", {
      item_id: selectedItem.id
    });
  }

  function handleDeleteSelected() {
    if (!selectedItem) {
      return;
    }

    const nextItems = document.items.filter((item) => item.id !== selectedItem.id);
    commitDocument(
      {
        ...document,
        items: nextItems
      },
      "ATB content manager",
      "Content item removed."
    );
    setSelectedId(nextItems[0]?.id || null);
    trackEvent("content_manager_item_deleted", {
      item_id: selectedItem.id
    });
  }

  function handleReset() {
    const nextDocument = resetContentDocument();
    setDocument(nextDocument);
    setSelectedId(nextDocument.items[0]?.id || null);
    setFeedback("Default content restored.");
    trackEvent("content_manager_reset");
  }

  function handleImport() {
    try {
      const nextDocument = importContentDocument(importValue, "ATB content manager");
      setDocument(nextDocument);
      setSelectedId(nextDocument.items[0]?.id || null);
      setFeedback("Imported content loaded.");
      trackEvent("content_manager_import");
    } catch (error) {
      setFeedback("The import did not load. Check the JSON format and try again.");
    }
  }

  return (
    <section className="page-shell">
      <ContentManagerAlert
        manifest={manifest}
        summary={summary}
        updatedAt={document.updatedAt}
        updatedBy={document.updatedBy}
      />

      <section className="content-panel">
        <p className="eyebrow">Create New</p>
        <h2>Start from a template built for sports communications.</h2>
        <div className="manager-template-grid">
          {templates.map((template) => (
            <article key={template.id} className="mini-card manager-template-card">
              <h3>{template.label}</h3>
              <p>{template.description}</p>
              <button
                type="button"
                className="button button-small button-ghost"
                onClick={() => handleCreate(template)}
              >
                Add {template.label}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section manager-shell">
        <div className="content-panel manager-list-panel">
          <p className="eyebrow">Content Items</p>
          <h2>Manage what appears across the site.</h2>
          <div className="manager-item-list">
            {document.items.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`manager-item-button ${
                  item.id === selectedId ? "is-active" : ""
                }`}
                onClick={() => {
                  setSelectedId(item.id);
                  setFeedback("");
                }}
              >
                <span>{item.templateLabel}</span>
                <strong>{item.title || "Untitled item"}</strong>
                <small>
                  {item.status} | priority {item.priority}
                </small>
              </button>
            ))}
          </div>
        </div>

        <div className="content-panel manager-editor-panel">
          <p className="eyebrow">Editor</p>
          <h2>{selectedItem ? selectedItem.title || "Edit content" : "Select a content item"}</h2>

          {selectedItem ? (
            <>
              <div className="form-grid">
                <label className="form-field form-field-full">
                  <span>Title</span>
                  <input
                    value={selectedItem.title}
                    onChange={(event) =>
                      handleItemChange("title", event.target.value)
                    }
                  />
                </label>

                <label className="form-field form-field-full">
                  <span>Body</span>
                  <textarea
                    rows={5}
                    value={selectedItem.body}
                    onChange={(event) =>
                      handleItemChange("body", event.target.value)
                    }
                  />
                </label>

                <label className="form-field">
                  <span>Status</span>
                  <select
                    value={selectedItem.status}
                    onChange={(event) =>
                      handleItemChange("status", event.target.value)
                    }
                  >
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>Priority</span>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={selectedItem.priority}
                    onChange={(event) =>
                      handleItemChange("priority", event.target.value)
                    }
                  />
                </label>

                <label className="form-field">
                  <span>Start date</span>
                  <input
                    type="date"
                    value={selectedItem.startDate}
                    onChange={(event) =>
                      handleItemChange("startDate", event.target.value)
                    }
                  />
                </label>

                <label className="form-field">
                  <span>End date</span>
                  <input
                    type="date"
                    value={selectedItem.endDate}
                    onChange={(event) =>
                      handleItemChange("endDate", event.target.value)
                    }
                  />
                </label>

                <label className="form-field">
                  <span>Link</span>
                  <input
                    value={selectedItem.linkUrl}
                    onChange={(event) =>
                      handleItemChange("linkUrl", event.target.value)
                    }
                  />
                </label>

                <label className="form-field">
                  <span>Button label</span>
                  <input
                    value={selectedItem.actionLabel}
                    onChange={(event) =>
                      handleItemChange("actionLabel", event.target.value)
                    }
                  />
                </label>

                <label className="form-field form-field-full">
                  <span>Tags</span>
                  <input
                    value={selectedItem.tags.join(", ")}
                    onChange={(event) =>
                      handleItemChange("tags", event.target.value)
                    }
                  />
                </label>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="button"
                  onClick={handleSaveSelected}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="button button-small button-ghost"
                  onClick={handleDeleteSelected}
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <p>Select a content item to begin editing.</p>
          )}

          {feedback ? <p className="helper-copy">{feedback}</p> : null}
        </div>
      </section>

      <section className="split-section">
        <div className="content-panel">
          <p className="eyebrow">Export</p>
          <h2>Copy or save the current content document.</h2>
          <textarea
            className="manager-json"
            rows={14}
            readOnly
            value={exportValue}
          />
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">Import or Reset</p>
          <h2>Load a saved content document or restore the default set.</h2>
          <textarea
            className="manager-json"
            rows={10}
            value={importValue}
            onChange={(event) => setImportValue(event.target.value)}
            placeholder='Paste a JSON document with an "items" array.'
          />
          <div className="form-actions">
            <button
              type="button"
              className="button button-small"
              onClick={handleImport}
              disabled={!importValue.trim()}
            >
              Import JSON
            </button>
            <button
              type="button"
              className="button button-small button-ghost"
              onClick={handleReset}
            >
              Reset Defaults
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContentManagerWorkspace;
