import { useEffect, useMemo, useState } from "react";
import {
  CONTENT_MANAGER_STORAGE_EVENT,
  getActiveContentItems,
  loadContentDocument,
  summarizeContentDocument
} from "./storage";

function useManagedContent(limit) {
  const [document, setDocument] = useState(() => loadContentDocument());

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    function refreshDocument() {
      setDocument(loadContentDocument());
    }

    window.addEventListener("storage", refreshDocument);
    window.addEventListener(CONTENT_MANAGER_STORAGE_EVENT, refreshDocument);

    return () => {
      window.removeEventListener("storage", refreshDocument);
      window.removeEventListener(CONTENT_MANAGER_STORAGE_EVENT, refreshDocument);
    };
  }, []);

  const activeItems = useMemo(
    () => getActiveContentItems(document, limit),
    [document, limit]
  );
  const summary = useMemo(() => summarizeContentDocument(document), [document]);

  return {
    document,
    setDocument,
    activeItems,
    summary
  };
}

export default useManagedContent;
