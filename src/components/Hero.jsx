import { Link } from "react-router-dom";
import atbLogo from "../assets/atb-logo.png";
import atbTeamHero from "../assets/atb-team-hero.jpg";

const highlights = [
  {
    label: "Fastest path",
    detail: "Parents can now move from tryouts to registration without leaving the site."
  },
  {
    label: "Built for",
    detail: "Arlington and Northern Virginia families comparing next-step baseball options."
  },
  {
    label: "Credibility",
    detail: "Real ATB branding, real sponsor logos, and a direct support path are visible from the homepage."
  },
  {
    label: "Fallback",
    detail: "If a hosted form endpoint is not connected yet, every lead form still routes to ATB email."
  }
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-layout">
          <div>
            <p className="eyebrow">Arlington Travel Baseball</p>
            <h1>Make the next step obvious for parents and sponsors.</h1>
            <p className="hero-text">
              The homepage now does the three jobs that matter most: establish
              trust quickly, send families into a real tryout registration path,
              and keep sponsor visibility visible without forcing extra clicks.
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
              Verified program metrics can replace this general proof copy once
              ATB confirms what can be published.
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
                The live ATB logo and team image stay in place so the redesign
                feels familiar while the conversion flow gets cleaner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
