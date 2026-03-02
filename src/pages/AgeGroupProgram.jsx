import { Link, Navigate, useParams } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import { ageGroupPrograms } from "../data/programs";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const programsBySlug = ageGroupPrograms.reduce((accumulator, program) => {
  accumulator[program.slug] = program;
  return accumulator;
}, {});

function AgeGroupProgram() {
  const { ageGroup } = useParams();
  const program = programsBySlug[ageGroup?.toLowerCase()];

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const title = `${program.name} Travel Baseball in Arlington, VA`;
  const description = `ATB ${program.name} program overview for Arlington families, with development focus, next-step links, and a direct path to tryouts and registration.`;

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path={`/programs/${program.slug}`}
        schema={[
          organizationSchema(),
          webPageSchema({
            path: `/programs/${program.slug}`,
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" },
            { name: `${program.name} Travel Baseball`, path: `/programs/${program.slug}` }
          ])
        ]}
      />

      <section className="page-shell">
        <div className="page-hero">
          <p className="eyebrow">{program.name} Program</p>
          <h1>{program.searchHeadline}</h1>
          <p>{program.fit}</p>
        </div>

        <div className="split-section">
          <div className="content-panel">
            <p className="eyebrow">Development focus</p>
            <h2>{program.name} families need a clear starting point.</h2>
            <p>{program.focus}</p>
            <div className="feature-list">
              {program.details.map((item) => (
                <div key={item} className="feature-row">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="content-panel dark-panel">
            <p className="eyebrow">Next step</p>
            <h2>Take the next step with confidence.</h2>
            <p>
              Once the fit feels right, families can move directly into tryouts
              and registration.
            </p>
            <div className="stacked-links">
              <Link className="button button-small" to="/tryouts">
                Review Tryouts
              </Link>
              <Link className="button button-small button-ghost" to="/registration">
                Registration
              </Link>
            </div>
          </div>
        </div>

        <div className="content-panel">
          <p className="eyebrow">Keep exploring</p>
          <h2>Compare the full program path.</h2>
          <div className="stacked-links">
            <Link className="button button-small button-ghost" to="/programs">
              All Programs
            </Link>
            <Link className="button button-small button-ghost" to="/costs-commitment">
              Costs + Commitment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AgeGroupProgram;
