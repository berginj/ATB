import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";
import { programSeasonRhythm } from "../data/programs";

const costNotes = [
  "Travel baseball is a bigger family commitment than rec-only baseball, both on the calendar and in communication.",
  "Team dues, uniforms, and tournament plans are part of the season conversation for every family.",
  "The best next step is to review tryouts and speak directly with ATB about the right fit for your player."
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
            one number. The full picture includes time, communication, season
            rhythm, and the way baseball fits the rest of family life.
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
            <p className="eyebrow">What families should plan for</p>
            <h2>Know what the season asks before you commit.</h2>
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
