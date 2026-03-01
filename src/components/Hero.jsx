import { Link } from "react-router-dom";
import heroPattern from "../assets/hero-pattern.svg";
import teamDugout from "../assets/team-dugout.svg";

const highlights = [
  {
    label: "What",
    detail:
      "Year-round baseball development with stronger coaching, better reps, and a clear growth path."
  },
  {
    label: "Who",
    detail: "Arlington players ages 8U-12U seeking travel competition and structured skill work."
  },
  {
    label: "Where",
    detail: "Arlington, Virginia, with training and game play across local and regional venues."
  },
  {
    label: "Next season",
    detail: "Spring 2026 programming is active now, with registration and tryout windows open."
  }
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-layout">
          <div>
            <p className="eyebrow">Arlington Travel Baseball</p>
            <h1>Built for players who want more reps, more purpose, and more game.</h1>
            <p className="hero-text">
              ATB gives Arlington families a modern home base for registration,
              tryouts, team updates, and Instagram-led storytelling without the
              clutter of a traditional league site.
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

            <p className="hero-update">Updated for Spring 2026</p>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-main">
              {/* Replace this placeholder with a current team photo in src/assets when launch media is ready. */}
              <img src={teamDugout} alt="Illustrated ATB team moment" />
            </div>
            <div className="hero-card hero-card-accent">
              <img src={heroPattern} alt="" aria-hidden="true" />
              <p>
                Instagram-driven updates keep families close to roster news,
                training moments, and the next registration milestone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
