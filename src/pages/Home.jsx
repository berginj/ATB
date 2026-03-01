import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import InstagramFeed from "../components/InstagramFeed";
import SponsorsSection from "../components/Sponsors";

const quickHits = [
  "8U-12U travel development built around long-term growth",
  "Tryouts, registration, and seasonal updates surfaced quickly",
  "Instagram-first content keeps the site current with less admin work"
];

const communityLinks = [
  {
    name: "Arlington Youth Baseball",
    detail:
      "Local baseball access and rec pathways that help players keep building reps.",
    href: "https://www.arlingtonlittleleague.org/"
  },
  {
    name: "ATB Registration",
    detail:
      "The fastest route for new player interest, evaluations, camps, and seasonal sign-ups.",
    href: "https://arlingtontravelbaseball.org/register/"
  },
  {
    name: "Program Overview",
    detail:
      "Current training structure, seasonal rhythm, and high-level expectations for families.",
    href: "https://arlingtontravelbaseball.org/programs/"
  },
  {
    name: "Contact ATB",
    detail:
      "Direct support for roster questions, tryout timing, and sponsor outreach.",
    href: "mailto:atbarsenal@gmail.com"
  }
];

const involvement = [
  {
    title: "Coach With ATB",
    detail:
      "Help lead practices, shape player habits, and support a competitive development environment.",
    to: "/contact"
  },
  {
    title: "Volunteer",
    detail:
      "Support events, operations, field setup, and the details that keep weekends moving.",
    to: "/contact"
  },
  {
    title: "Become a Sponsor",
    detail:
      "Back player opportunities, uniforms, and tournament access while staying visible in the community.",
    to: "/sponsors"
  }
];

function Home() {
  return (
    <>
      <Hero />

      <section className="feature-strip">
        {quickHits.map((item) => (
          <div key={item} className="feature-pill">
            {item}
          </div>
        ))}
      </section>

      <section className="split-section">
        <div className="content-panel">
          <p className="eyebrow">Program Snapshot</p>
          <h2>Serious development without losing the joy of the game.</h2>
          <p>
            ATB is built for Arlington players who want stronger coaching,
            better competition, and a cleaner path from fundamentals to
            confident travel play.
          </p>
          <div className="stacked-links">
            <Link className="button button-small" to="/about">
              Meet ATB
            </Link>
            <Link className="button button-small button-ghost" to="/teams">
              View Teams
            </Link>
          </div>
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">Next Steps</p>
          <h2>Spring 2026 registration is active.</h2>
          <p>
            Publish dates here, keep the registration link obvious, and let
            Instagram handle the live energy around sign-up reminders and team
            updates.
          </p>
          <a
            className="button button-small"
            href="https://arlingtontravelbaseball.org/register/"
            target="_blank"
            rel="noreferrer"
          >
            Go to Registration
          </a>
        </div>
      </section>

      <section className="feed-surface">
        <InstagramFeed />
      </section>

      <SponsorsSection />

      <section className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Arlington Baseball</p>
            <h2>Key links families actually need</h2>
          </div>
          <p className="section-caption">
            Keep this section lightweight: fast paths to registration, program
            details, and core community connections.
          </p>
        </div>
        <div className="page-grid">
          {communityLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mini-card"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Get Involved</p>
            <h2>Support the program on and off the field</h2>
          </div>
        </div>
        <div className="level-grid">
          {involvement.map((item) => (
            <article key={item.title} className="mini-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <Link to={item.to} className="inline-link">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel">
        <p className="eyebrow">Need Help?</p>
        <h2>Contact ATB for registration, tryouts, and team support.</h2>
        <p>
          Email <a href="mailto:atbarsenal@gmail.com">atbarsenal@gmail.com</a>{" "}
          or call <a href="tel:+17036797756">(703) 679-7756</a>.
        </p>
      </section>
    </>
  );
}

export default Home;
