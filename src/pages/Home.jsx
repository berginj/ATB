import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import InstagramFeed from "../components/InstagramFeed";
import SponsorsSection from "../components/Sponsors";

const quickHits = [
  "ATB branding now matches the current public site",
  "Instagram and recent imagery are pushed closer to the top",
  "The path to programs, teams, and contact is shorter and cleaner"
];

const startHere = [
  {
    title: "Programs",
    detail: "See the development path, age groups, and seasonal rhythm first.",
    to: "/programs"
  },
  {
    title: "Teams",
    detail: "Jump straight to team tracks, coaches, and roster packet requests.",
    to: "/teams"
  },
  {
    title: "Contact",
    detail: "One clear place for family questions, sponsor outreach, and support.",
    to: "/contact"
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

      <section className="feed-surface">
        <InstagramFeed />
      </section>

      <section className="split-section">
        <div className="content-panel">
          <p className="eyebrow">Start Here</p>
          <h2>Put the most-used actions in one place.</h2>
          <p>
            The homepage is lighter now: the top of the site focuses on the ATB
            brand, recent photos, and the shortest route to the pages families
            use most.
          </p>

          <div className="level-grid compact-grid">
            {startHere.map((item) => (
              <article key={item.title} className="mini-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link to={item.to} className="inline-link">
                  Open page
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">Current Season</p>
          <h2>The season is underway, so the experience stays focused.</h2>
          <p>
            Registration is still easy to reach from the header and the main
            calls to action, while the homepage keeps the focus on teams,
            updates, and the next useful step for families.
          </p>
          <div className="stacked-links">
            <a
              className="button button-small"
              href="https://arlingtontravelbaseball.org/register/"
              target="_blank"
              rel="noreferrer"
            >
              Go to Registration
            </a>
            <Link className="button button-small button-ghost" to="/about">
              About ATB
            </Link>
          </div>
        </div>
      </section>

      <SponsorsSection />

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
