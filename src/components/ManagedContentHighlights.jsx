import { Link } from "react-router-dom";
import { useManagedContent } from "../features/content-manager-kit";

function ManagedContentHighlights() {
  const { activeItems } = useManagedContent(3);

  if (activeItems.length === 0) {
    return null;
  }

  return (
    <section className="content-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Club Updates</p>
          <h2>Fresh headlines managed in one place.</h2>
        </div>
      </div>

      <div className="level-grid compact-grid">
        {activeItems.map((item) => (
          <article key={item.id} className="mini-card manager-highlight-card">
            <p className="eyebrow">{item.templateLabel}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.linkUrl ? (
              item.linkUrl.startsWith("/") ? (
                <Link className="inline-link" to={item.linkUrl}>
                  {item.actionLabel}
                </Link>
              ) : (
                <a
                  className="inline-link"
                  href={item.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.actionLabel}
                </a>
              )
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ManagedContentHighlights;
