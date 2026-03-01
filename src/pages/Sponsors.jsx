import SponsorsSection from "../components/Sponsors";

function SponsorsPage() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Sponsors</p>
        <h1>Community partners help keep player opportunities moving.</h1>
        <p>
          Sponsor space is organized to support quick logo swaps, updated
          partner copy, and future fundraising campaigns.
        </p>
      </div>

      <SponsorsSection />

      <div className="content-panel dark-panel">
        <p className="eyebrow">Become a Partner</p>
        <h2>Highlight visibility, events, and player support in one place.</h2>
        <p>
          Add sponsorship tiers, downloadable one-sheets, or a direct donor link
          here when the next campaign is ready.
        </p>
      </div>
    </section>
  );
}

export default SponsorsPage;
