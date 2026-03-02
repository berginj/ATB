import PageSeo from "../components/PageSeo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const teams = [
  {
    name: "Academy / entry level",
    detail: "A development-first start built around fundamentals, confidence, and strong habits."
  },
  {
    name: "Younger travel groups",
    detail: "Younger players build mechanics, baseball instincts, and reliable team habits."
  },
  {
    name: "Core travel groups",
    detail: "Competitive teams focused on game awareness, stronger execution, and steady growth."
  },
  {
    name: "Big-field transition",
    detail: "Older players prepare for faster baseball, bigger moments, and the next level of competition."
  }
];

function Teams() {
  const title = "ATB Teams | Arlington Travel Baseball";
  const description =
    "Overview of ATB team tracks and the next step for families who want more specific team information.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/teams"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/teams",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Teams", path: "/teams" }
          ])
        ]}
      />

      <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Teams</p>
        <h1>ATB teams are built to grow players at every stage.</h1>
        <p>
          From early development to big-field preparation, each ATB group is
          built around strong coaching, clear expectations, and steady growth.
        </p>
      </div>

      <div className="level-grid">
        {teams.map((team) => (
          <article key={team.name} className="content-panel">
            <p className="eyebrow">{team.name}</p>
            <h2>{team.name}</h2>
            <p>{team.detail}</p>
            <a
              className="button button-small button-ghost"
              href={`mailto:atbarsenal@gmail.com?subject=${encodeURIComponent(
                `${team.name} team information`
              )}`}
            >
              Request Team Details
            </a>
          </article>
        ))}
      </div>
      </section>
    </>
  );
}

export default Teams;
