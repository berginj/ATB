function ProofStrip({ eyebrow = "Why families trust the path", items }) {
  return (
    <section className="content-panel proof-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>Clear next steps, visible proof, and no dead-end CTAs.</h2>
        </div>
      </div>

      <div className="proof-grid">
        {items.map((item) => (
          <div key={item.title} className="proof-item">
            <p className="proof-label">{item.title}</p>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProofStrip;
