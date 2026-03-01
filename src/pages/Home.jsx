import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProofStrip from "../components/ProofStrip";
import InstagramFeed from "../components/InstagramFeed";
import SponsorsSection from "../components/Sponsors";

const quickHits = [
  "One canonical tryouts page",
  "One working registration path",
  "One backup contact path if a form needs manual follow-up"
];

const proofItems = [
  {
    title: "Local focus",
    detail: "The site is written for Arlington and Northern Virginia families evaluating travel baseball options."
  },
  {
    title: "Visible trust",
    detail: "Real sponsor partners and real ATB visuals are now part of the primary conversion path."
  },
  {
    title: "No dead ends",
    detail: "High-intent CTAs now route to Tryouts, Registration, Sponsors, or direct contact."
  }
];

const startHere = [
  {
    title: "Tryouts",
    detail: "Start with the canonical page for dates, expectations, FAQs, and the main registration CTA.",
    to: "/tryouts"
  },
  {
    title: "Registration",
    detail: "Fill out the parent/player details form or join the lower-friction tryout alerts list.",
    to: "/registration"
  },
  {
    title: "Sponsors",
    detail: "See the current sponsor lineup and start a sponsor lead without hunting for a contact form.",
    to: "/sponsors"
  }
];

function Home() {
  return (
    <>
      <Hero />

      <section className="feature-strip">
        {quickHits.map((item) => (
          <div key={item} className="feature-pill">
            {item}
          </div>
        ))}
      </section>

      <ProofStrip items={proofItems} />

      <section className="feed-surface">
        <InstagramFeed />
      </section>

      <section className="split-section">
        <div className="content-panel">
          <p className="eyebrow">Start Here</p>
          <h2>Route high-intent visitors to the next useful step.</h2>
          <p>
            The homepage now has one job: move parents or sponsors into a real
            next step quickly, then use photos, proof, and supporting content to
            reinforce that decision.
          </p>

          <div className="level-grid compact-grid">
            {startHere.map((item) => (
              <article key={item.title} className="mini-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link to={item.to} className="inline-link">
                  Open page
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">Conversion Fixes</p>
          <h2>Replace vague navigation with clear actions.</h2>
          <p>
            The old registration dead-end is now replaced with a real internal
            registration flow, and every major CTA should end in a useful form,
            a next-step page, or direct ATB contact.
          </p>
          <div className="stacked-links">
            <Link className="button button-small" to="/registration">
              Go to Registration
            </Link>
            <Link className="button button-small button-ghost" to="/tryouts">
              Review Tryouts
            </Link>
          </div>
        </div>
      </section>

      <SponsorsSection />

      <section className="content-panel">
        <p className="eyebrow">Need Help?</p>
        <h2>Contact ATB for registration, tryouts, and sponsor follow-up.</h2>
        <p>
          Email <a href="mailto:atbarsenal@gmail.com">atbarsenal@gmail.com</a>{" "}
          or call <a href="tel:+17036797756">(703) 679-7756</a>.
        </p>
        <div className="stacked-links">
          <Link className="button button-small button-ghost" to="/contact">
            Open Contact
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
