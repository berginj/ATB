import { Link } from "react-router-dom";
import atbLogo from "../assets/atb-logo.png";
import atbTeamHero from "../assets/atb-team-hero.jpg";

const highlights = [
  {
    label: "Player development",
    detail: "Every ATB touchpoint is built to help players grow with confidence, discipline, and purpose."
  },
  {
    label: "Family clarity",
    detail: "Parents can move quickly from program questions to tryouts, registration, and direct contact."
  },
  {
    label: "Local roots",
    detail: "ATB stays connected to Arlington families, rec baseball, and the wider local baseball community."
  },
  {
    label: "Club support",
    detail: "Sponsors, coaches, and families all play a role in keeping opportunities strong all season."
  }
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-layout">
          <div>
            <p className="eyebrow">Arlington Travel Baseball</p>
            <h1>Player development, strong teams, and a clear path forward.</h1>
            <p className="hero-text">
              ATB gives Arlington families a stronger baseball path built on
              development, competition, and clear communication at every step.
            </p>

            <div className="hero-facts">
              {highlights.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}:</strong> {item.detail}
                </p>
              ))}
            </div>

            <div className="hero-actions">
              <Link className="button" to="/registration">
                Register for Tryouts
              </Link>
              <Link className="button button-ghost" to="/tryouts">
                See Tryouts
              </Link>
              <Link className="button button-ghost" to="/sponsors">
                Become a Sponsor
              </Link>
            </div>

            <p className="hero-update">
              Spring baseball is in full swing across Arlington.
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              {/* Pulled from the current ATB site so the homepage uses real club imagery. */}
              <img src={atbTeamHero} alt="Arlington Travel Baseball team photo" />
            </div>
            <div className="hero-card hero-card-accent">
              <img src={atbLogo} alt="Arlington Travel Baseball logo" />
              <p>
                The same ATB identity families already know, presented with a
                cleaner, faster experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
