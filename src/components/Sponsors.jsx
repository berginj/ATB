import { Link } from "react-router-dom";
import sponsorDiamond from "../assets/sponsor-diamond.svg";
import sponsorStride from "../assets/sponsor-stride.svg";
import sponsorClubhouse from "../assets/sponsor-clubhouse.svg";

// Swap these placeholder SVG imports for real sponsor logo assets as partnerships are confirmed.
const sponsors = [
  {
    name: "Diamond Partners",
    logo: sponsorDiamond,
    detail: "Founding-level support for tournament fees and uniforms."
  },
  {
    name: "Stride Lab",
    logo: sponsorStride,
    detail: "Performance and agility support for off-season development."
  },
  {
    name: "Clubhouse Collective",
    logo: sponsorClubhouse,
    detail: "Community backing for events, scholarships, and player travel."
  }
];

function SponsorsSection() {
  return (
    <section className="content-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured Sponsors</p>
          <h2>Community partners that keep opportunities moving</h2>
        </div>
        <Link className="inline-link" to="/sponsors">
          View sponsor opportunities
        </Link>
      </div>

      <p className="section-caption">
        Replace the SVG placeholders in `src/assets` with real sponsor logos as
        partnerships are finalized.
      </p>

      <div className="sponsor-grid">
        {sponsors.map((sponsor) => (
          <article key={sponsor.name} className="sponsor-card">
            <img src={sponsor.logo} alt={`${sponsor.name} placeholder logo`} />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.detail}</p>
          </article>
        ))}
      </div>

      <p className="helper-copy">Featured sponsor cards can rotate as new partners come in.</p>
    </section>
  );
}

export default SponsorsSection;
