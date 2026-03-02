import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import { ageGroupPrograms, programSeasonRhythm } from "../data/programs";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const parentResourceLinks = [
  {
    title: "Travel Baseball in Arlington",
    detail: "A search-friendly local guide for families comparing next-step baseball options.",
    to: "/travel-baseball-arlington-va"
  },
  {
    title: "Costs + Commitment",
    detail: "Use this page to answer the time and commitment questions before registration.",
    to: "/costs-commitment"
  },
  {
    title: "Rec + Travel Compatibility",
    detail: "Show parents how ATB fits alongside Arlington Little League and spring rec baseball.",
    to: "/rec-travel-compatibility"
  }
];

function Programs() {
  const title = "ATB Programs | 8U-12U Travel Baseball in Arlington, VA";
  const description =
    "Explore the ATB 8U-12U development path, open a dedicated age-group page, and move directly into the current-season tryout and registration flow.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/programs"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/programs",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" }
          ])
        ]}
      />

      <section className="page-shell">
        <div className="page-hero">
          <p className="eyebrow">Programs</p>
          <h1>8U-12U travel baseball in Arlington, with a clearer path by age group.</h1>
          <p>
            The program page now acts as a real hub: broad overview here,
            dedicated search-friendly pages for each age group, and direct links
            into tryouts and registration.
          </p>
        </div>

        <div className="level-grid">
          {ageGroupPrograms.map((program) => (
            <article key={program.slug} className="content-panel">
              <p className="eyebrow">{program.name}</p>
              <h2>{program.name} Development Track</h2>
              <p>{program.focus}</p>
              <div className="stacked-links">
                <Link
                  className="button button-small button-ghost"
                  to={`/programs/${program.slug}`}
                >
                  Open {program.name} Page
                </Link>
                <Link className="inline-link" to="/tryouts">
                  Review tryouts
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="split-section">
          <div className="content-panel">
            <p className="eyebrow">Season Rhythm</p>
            <h2>Training that stays connected all year</h2>
            <div className="feature-list">
              {programSeasonRhythm.map((item) => (
                <div key={item} className="feature-row">
                  {item}
                </div>
              ))}
            </div>
            <p className="helper-copy">
              Publish exact current-season team structure only after ATB confirms
              which age groups are active.
            </p>
          </div>

          <div className="content-panel dark-panel">
            <p className="eyebrow">Parent Search Guides</p>
            <h2>Support the questions families ask before they register.</h2>
            <div className="level-grid compact-grid">
              {parentResourceLinks.map((item) => (
                <article key={item.to} className="mini-card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <Link className="inline-link" to={item.to}>
                    Open page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;
