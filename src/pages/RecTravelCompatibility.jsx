import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const compatibilityPoints = [
  "Rec baseball, primarily through Arlington Little League, remains a core part of the ATB ethos.",
  "ATB uses Sunday practices and games to keep teams connected while players stay active in their local baseball communities.",
  "Clear communication between families and both coaching staffs keeps player workload safe and manageable."
];

function RecTravelCompatibility() {
  const title = "Can My Player Do Rec Ball and Travel Baseball in Arlington?";
  const description =
    "A clear guide for Arlington families balancing Arlington Little League and ATB, including communication, Sunday scheduling, and workload expectations.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/rec-travel-compatibility"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/rec-travel-compatibility",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Rec + Travel Compatibility", path: "/rec-travel-compatibility" }
          ])
        ]}
      />

      <section className="page-shell">
        <div className="page-hero">
          <p className="eyebrow">Parent Resource</p>
          <h1>Yes, ATB is built to work alongside rec baseball.</h1>
          <p>
            ATB is built for families who want stronger development without
            stepping away from the Arlington baseball community.
          </p>
        </div>

        <div className="split-section">
          <div className="content-panel">
            <p className="eyebrow">ATB approach</p>
            <h2>Keep players connected to their local baseball community.</h2>
            <div className="feature-list">
              {compatibilityPoints.map((item) => (
                <div key={item} className="feature-row">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="content-panel dark-panel">
            <p className="eyebrow">What families can expect</p>
            <h2>Communication is part of the commitment.</h2>
            <p>
              Families stay on top of player workload, keep both coaches
              informed, and help create a smoother spring for everyone.
            </p>
            <p>
              Team schedules, pitch-count guidance, and player care all work
              best when communication stays steady and proactive.
            </p>
          </div>
        </div>

        <div className="content-panel">
          <p className="eyebrow">Keep moving</p>
          <h2>Turn the question into a next step.</h2>
          <div className="stacked-links">
            <Link className="button button-small" to="/costs-commitment">
              Costs + Commitment
            </Link>
            <Link className="button button-small button-ghost" to="/registration">
              Registration
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecTravelCompatibility;
