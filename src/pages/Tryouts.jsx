import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import ProofStrip from "../components/ProofStrip";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const proofItems = [
  {
    title: "One clear process",
    detail: "Families can get the essentials quickly and move straight into registration."
  },
  {
    title: "Arlington focus",
    detail: "Built for families balancing player development, spring schedules, and the right competitive fit."
  },
  {
    title: "Straightforward next steps",
    detail: "If you have questions, ATB is easy to reach by registration form or direct contact."
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
    question: "When are ATB tryouts in 2026?",
    answer:
      "ATB shares tryout dates as each session is finalized so families can plan with confidence."
  },
  {
    question: "Where are ATB tryouts held?",
    answer:
      "Field locations, arrival details, and any game-day notes are shared as part of the tryout information for each session."
  },
  {
    question: "Is there a tryout fee?",
    answer:
      "Any tryout fee information is shared directly with families as part of the registration process."
  },
  {
    question: "What happens after a family registers?",
    answer:
      "ATB follows up with next steps, final logistics, and the information your family needs for the session."
  }
];

function Tryouts() {
  const title = "ATB Tryouts 2026 | Arlington Youth Travel Baseball";
  const description =
    "ATB tryouts for Arlington and Northern Virginia families: dates, expectations, FAQs, and a direct registration path.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/tryouts"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/tryouts",
            title,
            description
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tryouts", path: "/tryouts" }
          ])
        ]}
      />

      <section className="page-shell">
        <div className="page-hero">
          <p className="eyebrow">Tryouts 2026</p>
          <h1>ATB tryouts 2026 in Arlington, VA: one page, one next step.</h1>
          <p>
            Families can come here first for the essentials, understand the
            process quickly, and move straight into registration.
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

        <ProofStrip items={proofItems} eyebrow="Why Families Choose ATB" />

        <div className="split-section">
          <div className="content-panel">
            <p className="eyebrow">Before you register</p>
            <h2>The right details make tryout day easier.</h2>
            <div className="feature-list">
              <div className="feature-row">
                ATB shares tryout dates and rain plans as sessions are finalized.
              </div>
              <div className="feature-row">
                Field locations, arrival windows, and parking details are shared with each session.
              </div>
              <div className="feature-row">
                Age-group placement is matched to the right development track for each player.
              </div>
              <div className="feature-row">
                Any fee information is handled clearly as part of registration.
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
          <p className="eyebrow">Keep exploring</p>
          <h2>Get the answers families usually want before they register.</h2>
          <div className="stacked-links">
            <Link className="button button-small button-ghost" to="/costs-commitment">
              Costs + Commitment
            </Link>
            <Link
              className="button button-small button-ghost"
              to="/rec-travel-compatibility"
            >
              Rec + Travel
            </Link>
            <Link
              className="button button-small button-ghost"
              to="/travel-baseball-arlington-va"
            >
              Arlington Guide
            </Link>
          </div>
        </div>

        <div className="content-panel">
          <p className="eyebrow">Next step</p>
          <h2>Take the next step and register.</h2>
          <p>
            Once you are ready, the next click should take you straight into the
            registration form.
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
    </>
  );
}

export default Tryouts;
