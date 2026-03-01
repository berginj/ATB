import { Link } from "react-router-dom";
import ProofStrip from "../components/ProofStrip";

const proofItems = [
  {
    title: "Canonical page",
    detail: "This is now the one tryouts page parents should use before registering."
  },
  {
    title: "No guessed schedule",
    detail: "Dates and locations should be published here only after ATB confirms them."
  },
  {
    title: "Clear fallback",
    detail: "If a family still has questions, the page routes directly to registration or contact."
  }
];

const checklist = [
  "Baseball gear for the player",
  "Water and weather-appropriate layers",
  "A parent or guardian available for follow-up details",
  "Questions about fit, timing, or age group written down in advance"
];

const faqs = [
  {
    question: "When are tryouts?",
    answer:
      "The confirmed current-season tryout calendar will be posted here as soon as ATB finalizes dates and rain plans."
  },
  {
    question: "Where are tryouts held?",
    answer:
      "The confirmed field locations, arrival instructions, and parking notes will be listed here once the schedule is locked."
  },
  {
    question: "Is there a tryout fee?",
    answer:
      "Fee details will be published here only after ATB confirms whether a current-season evaluation fee applies."
  },
  {
    question: "What happens after a family registers?",
    answer:
      "ATB should follow up with the right age-group next step, final logistics, and any player-specific details."
  }
];

function Tryouts() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Tryouts</p>
        <h1>One canonical place for dates, expectations, and next steps.</h1>
        <p>
          The old “find the right post” workflow is gone. Parents should be
          able to land here, understand the process quickly, and move straight
          into registration.
        </p>
        <div className="stacked-links">
          <Link className="button button-small" to="/registration">
            Register for Tryouts
          </Link>
          <Link className="button button-small button-ghost" to="/contact">
            Ask a Question
          </Link>
        </div>
      </div>

      <ProofStrip items={proofItems} eyebrow="Trust first" />

      <div className="split-section">
        <div className="content-panel">
          <p className="eyebrow">Before you register</p>
          <h2>Publish the essentials here every season.</h2>
          <div className="feature-list">
            <div className="feature-row">
              Confirmed tryout dates and any rain-date backup plan belong here.
            </div>
            <div className="feature-row">
              Field locations, arrival window, and parking guidance belong here.
            </div>
            <div className="feature-row">
              The current season age-group lineup should be published here once it is confirmed.
            </div>
            <div className="feature-row">
              Evaluation fee details should only appear here if a fee is actually required.
            </div>
          </div>
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">What to bring</p>
          <h2>Keep preparation simple and parent-friendly.</h2>
          <div className="feature-list">
            {checklist.map((item) => (
              <div key={item} className="feature-row">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-grid">
        {faqs.map((item) => (
          <article key={item.question} className="content-panel">
            <p className="eyebrow">FAQ</p>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>

      <div className="content-panel">
        <p className="eyebrow">Next step</p>
        <h2>Turn tryout interest into a working form submission.</h2>
        <p>
          Once a family has the basics, the next click should take them to the
          registration form, not an archive page or a generic post.
        </p>
        <div className="stacked-links">
          <Link className="button button-small" to="/registration">
            Complete Registration
          </Link>
          <a className="button button-small button-ghost" href="mailto:atbarsenal@gmail.com">
            Email ATB
          </a>
        </div>
      </div>
    </section>
  );
}

export default Tryouts;
