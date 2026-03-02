function ContentManagerAlert({ manifest, summary, updatedAt, updatedBy }) {
  return (
    <section className="content-panel manager-alert">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Content Manager</p>
          <h2>ATB content control at a glance.</h2>
        </div>
        <p className="helper-copy">
          {manifest.name} v{manifest.version}
        </p>
      </div>

      <div className="proof-grid">
        <div className="proof-item">
          <p className="proof-label">Total Items</p>
          <p>{summary.total}</p>
        </div>
        <div className="proof-item">
          <p className="proof-label">Active</p>
          <p>{summary.active}</p>
        </div>
        <div className="proof-item">
          <p className="proof-label">Drafts</p>
          <p>{summary.draft}</p>
        </div>
      </div>

      <p className="section-caption">
        Last updated {new Date(updatedAt).toLocaleString()} by {updatedBy}.
      </p>
    </section>
  );
}

export default ContentManagerAlert;
