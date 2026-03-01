import { Link } from "react-router-dom";
import atbLogo from "../assets/atb-logo.png";
import atbTeamHero from "../assets/atb-team-hero.jpg";

const highlights = [
  {
    label: "What",
    detail:
      "A cleaner path to teams, registration, and player development without digging through old page layers."
  },
  {
    label: "Who",
    detail:
      "Arlington families looking for academy and travel baseball opportunities with a stronger development focus."
  },
  {
    label: "Where",
    detail: "Arlington, Virginia, with training and game play across local and regional venues."
  },
  {
    label: "Right now",
    detail: "The season is underway, so the site keeps registration, team info, and recent updates easy to reach."
  }
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-layout">
          <div>
            <p className="eyebrow">Arlington Travel Baseball</p>
            <h1>Keep ATB familiar, sharper, and easier to use.</h1>
            <p className="hero-text">
              This redesign keeps the real ATB identity front and center,
              simplifies the path to the information families actually need, and
              puts recent photos and updates closer to the top of the experience.
            </p>

            <div className="hero-facts">
              {highlights.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}:</strong> {item.detail}
                </p>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="button"
                href="https://arlingtontravelbaseball.org/register/"
                target="_blank"
                rel="noreferrer"
              >
                Register
              </a>
              <Link className="button button-ghost" to="/programs">
                Programs
              </Link>
              <Link className="button button-ghost" to="/contact">
                Contact
              </Link>
            </div>

            <p className="hero-update">Spring season is in progress.</p>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              {/* Pulled from the current ATB site so the homepage uses real club imagery. */}
              <img src={atbTeamHero} alt="Arlington Travel Baseball team photo" />
            </div>
            <div className="hero-card hero-card-accent">
              <img src={atbLogo} alt="Arlington Travel Baseball logo" />
              <p>
                The live ATB logo and team image are now baked into the site so
                the brand matches what families already know from the current
                homepage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
