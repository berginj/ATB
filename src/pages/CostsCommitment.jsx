import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";
import { programSeasonRhythm } from "../data/programs";

const costNotes = [
  "Exact dues, uniform costs, and tournament costs still need confirmation before they should be published.",
  "Families should expect travel baseball to carry a higher time and communication load than rec-only baseball.",
  "The most useful current next step is reviewing tryouts and contacting ATB directly with fit questions."
];

function CostsCommitment() {
  const title = "Travel Baseball Costs and Commitment in Arlington, VA";
  const description =
    "A parent-friendly guide to what ATB families should consider before committing: schedule rhythm, communication, and the questions to ask before registration.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/costs-commitment"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/costs-commitment",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Costs + Commitment", path: "/costs-commitment" }
          ])
        ]}
      />

      <section className="page-shell">
        <div className="page-hero">
          <p className="eyebrow">Parent Resource</p>
          <h1>What travel baseball costs and commitment really mean for families.</h1>
          <p>
            Parents search for pricing, but the decision is usually bigger than
            one number. This page gives ATB a search-friendly place to explain
            the time commitment, season rhythm, and the questions families
            should ask before registering.
          </p>
        </div>

        <div className="split-section">
          <div className="content-panel">
            <p className="eyebrow">Season rhythm</p>
            <h2>Families need to understand the calendar first.</h2>
            <div className="feature-list">
              {programSeasonRhythm.map((item) => (
                <div key={item} className="feature-row">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="content-panel dark-panel">
            <p className="eyebrow">What to confirm</p>
            <h2>Do not publish exact pricing until it is confirmed.</h2>
            <div className="feature-list">
              {costNotes.map((item) => (
                <div key={item} className="feature-row">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-panel">
          <p className="eyebrow">Best next steps</p>
          <h2>Let families compare fit before they commit.</h2>
          <div className="stacked-links">
            <Link className="button button-small" to="/rec-travel-compatibility">
              Rec + Travel Compatibility
            </Link>
            <Link className="button button-small button-ghost" to="/tryouts">
              Review Tryouts
            </Link>
            <Link className="button button-small button-ghost" to="/contact">
              Contact ATB
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CostsCommitment;
