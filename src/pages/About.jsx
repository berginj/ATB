import PageSeo from "../components/PageSeo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

function About() {
  const title = "About ATB | Arlington Travel Baseball";
  const description =
    "Learn about the Arlington Travel Baseball mission, values, and player-development focus for Arlington and Northern Virginia families.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/about"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/about",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" }
          ])
        ]}
      />

      <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">About ATB</p>
        <h1>Focused on player development, built around Arlington families.</h1>
        <p>
          Arlington Travel Baseball exists to give local athletes access to
          quality coaching, higher-level competition, and a positive baseball
          experience.
        </p>
      </div>

      <div className="page-grid">
        <article className="content-panel">
          <h2>Mission</h2>
          <p>
            Help players improve baseball skills through instruction, repetition,
            and strong competitive environments while keeping the experience
            supportive and team-first.
          </p>
        </article>

        <article className="content-panel">
          <h2>Values</h2>
          <p>
            Growth, effort, coachability, and respect for teammates, opponents,
            and the game itself guide every ATB season.
          </p>
        </article>

        <article className="content-panel">
          <h2>Short History</h2>
          <p>
            Since 2011, ATB has served Arlington players looking for a deeper
            training path beyond rec ball while staying connected to the local
            baseball community.
          </p>
        </article>
      </div>
      </section>
    </>
  );
}

export default About;
