import { Link } from "react-router-dom";
import sponsorBuffaloGroupe from "../assets/sponsor-buffalo-groupe.png";
import sponsorVrge from "../assets/sponsor-vrge.jpg";
import sponsorResurgent from "../assets/sponsor-resurgent.png";
import sponsorRohrbachRosenthal from "../assets/sponsor-rohrbach-rosenthal.jpg";
import sponsorSage from "../assets/sponsor-sage.jpg";
import sponsorInova from "../assets/sponsor-inova.png";

const sponsors = [
  {
    name: "Buffalo Groupe",
    logo: sponsorBuffaloGroupe,
    detail: "Strategic backing for ATB programming and player opportunities."
  },
  {
    name: "VRGE",
    logo: sponsorVrge,
    detail: "Brand and business support helping keep club visibility strong."
  },
  {
    name: "Resurgent",
    logo: sponsorResurgent,
    detail: "Community partnership supporting growth and seasonal operations."
  },
  {
    name: "Rohrbach Rosenthal",
    logo: sponsorRohrbachRosenthal,
    detail: "Trusted local support helping ATB stay sustainable year-round."
  },
  {
    name: "SAGE",
    logo: sponsorSage,
    detail: "Arlington sports community alignment and shared local visibility."
  },
  {
    name: "Inova",
    logo: sponsorInova,
    detail: "Health and community presence connected to Arlington families."
  }
];

function SponsorsSection() {
  return (
    <section className="content-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured Sponsors</p>
          <h2>Current ATB sponsor logos</h2>
        </div>
        <Link className="inline-link" to="/sponsors">
          View sponsor opportunities
        </Link>
      </div>

      <p className="section-caption">
        These logos were pulled directly from the live ATB site so the sponsor
        section reflects the current partner lineup instead of placeholder art.
      </p>

      <div className="sponsor-grid">
        {sponsors.map((sponsor) => (
          <article key={sponsor.name} className="sponsor-card sponsor-card-real">
            <div className="sponsor-logo-frame">
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
            </div>
            <h3>{sponsor.name}</h3>
            <p>{sponsor.detail}</p>
          </article>
        ))}
      </div>

      <p className="helper-copy">
        Verified sponsor destination URLs can be added here once ATB confirms
        them.
      </p>
    </section>
  );
}

export default SponsorsSection;
