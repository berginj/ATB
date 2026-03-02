import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const localSignals = [
  "Built for Arlington and Northern Virginia families",
  "Designed to support rec baseball alongside ATB development",
  "Routes directly to tryouts, registration, and age-group pages"
];

const nextSteps = [
  {
    title: "Review tryouts",
    detail: "Start with the canonical page for current-season tryout timing and next steps.",
    to: "/tryouts"
  },
  {
    title: "Compare programs",
    detail: "See the 8U-12U development path and open the age group that fits your player.",
    to: "/programs"
  },
  {
    title: "Check fit",
    detail: "Use the costs and commitment page before you decide whether the program is the right match.",
    to: "/costs-commitment"
  }
];

function TravelBaseballArlington() {
  const title = "Travel Baseball in Arlington, VA (8U-12U)";
  const description =
    "A local guide for Arlington and Northern Virginia families comparing ATB travel baseball, tryouts, age groups, and next steps.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/travel-baseball-arlington-va"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/travel-baseball-arlington-va",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Travel Baseball in Arlington, VA", path: "/travel-baseball-arlington-va" }
          ])
        ]}
      />

      <section className="page-shell">
        <div className="page-hero">
          <p className="eyebrow">Local Search Guide</p>
          <h1>Travel baseball in Arlington, VA for families comparing next steps.</h1>
          <p>
            This page exists to match the way parents actually search. It gives
            Arlington and Northern Virginia families one clear entry point for
            travel baseball, then routes them to the program, tryout, and
            registration pages that answer the next question.
          </p>
        </div>

        <div className="split-section">
          <div className="content-panel">
            <p className="eyebrow">What parents want fast</p>
            <h2>Clarity beats hunting through old posts.</h2>
            <div className="feature-list">
              {localSignals.map((item) => (
                <div key={item} className="feature-row">
                  {item}
                </div>
              ))}
            </div>
            <p>
              Families usually need four answers quickly: which ages are
              supported, how ATB fits alongside rec ball, what the commitment
              looks like, and what the tryout path is right now.
            </p>
          </div>

          <div className="content-panel dark-panel">
            <p className="eyebrow">What is still pending</p>
            <h2>Publish exact season details only after they are confirmed.</h2>
            <p>
              ATB should add the current active age-group lineup, exact tryout
              calendar, and coach assignments once they are finalized for the
              season. Until then, this page should stay focused on accurate
              overview content and clear routing.
            </p>
          </div>
        </div>

        <div className="level-grid">
          {nextSteps.map((item) => (
            <article key={item.title} className="content-panel">
              <p className="eyebrow">Next step</p>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <Link className="button button-small button-ghost" to={item.to}>
                Open page
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default TravelBaseballArlington;
