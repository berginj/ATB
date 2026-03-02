import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import PageSeo from "../components/PageSeo";
import ProofStrip from "../components/ProofStrip";
import InstagramFeed from "../components/InstagramFeed";
import SponsorsSection from "../components/Sponsors";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const quickHits = [
  "Spring NVTBL Sunday dates are now posted",
  "Winter Wiffle Ball Bash is Saturday, March 7",
  "6-7U Spring Academy registration is open now"
];

const proofItems = [
  {
    title: "Rec + travel together",
    detail: "ATB keeps Arlington Little League and travel baseball connected instead of treating them as separate paths."
  },
  {
    title: "Three spring Sundays",
    detail: "Most teams will play three NVTBL Sunday doubleheader dates in April and May, with 8U playing single games."
  },
  {
    title: "Arm care first",
    detail: "Pitch counts, catcher workload, and coach-parent communication stay central while players balance rec and ATB."
  }
];

const startHere = [
  {
    title: "Tryouts",
    detail: "Start with the canonical page for timing, expectations, and the next step for your player.",
    to: "/tryouts"
  },
  {
    title: "Registration",
    detail: "Use the working registration flow for tryout interest or join the lower-friction alert list.",
    to: "/registration"
  },
  {
    title: "Contact",
    detail: "Use the single working support path for schedule questions, sponsor outreach, and follow-up.",
    to: "/contact"
  }
];

const parentSearchGuides = [
  {
    title: "Travel Baseball in Arlington",
    detail: "A local parent guide built around the searches families actually use.",
    to: "/travel-baseball-arlington-va"
  },
  {
    title: "Costs + Commitment",
    detail: "Answer the time, schedule, and commitment questions before registration.",
    to: "/costs-commitment"
  },
  {
    title: "Rec + Travel Compatibility",
    detail: "Show how ATB fits alongside Arlington Little League and spring rec ball.",
    to: "/rec-travel-compatibility"
  }
];

const ageGroupLinks = ["8u", "9u", "10u", "11u", "12u"];

const insideThisUpdate = [
  "Spring NVTBL schedule",
  "Arm care guidance",
  "Upcoming events",
  "Opportunities to get involved",
  "ATB alumni, team store, uniforms, and team photos"
];

const springSchedule = [
  {
    dates: "April 19, May 3, May 17",
    teams: "9U, 10U Blue, 11U Blue, 12U White"
  },
  {
    dates: "April 26, May 10, May 17",
    teams: "8U, 10U White, 11U White, 12U Blue"
  }
];

const armCareRules = [
  "ATB pitchers are limited to 20 pitches in Arlington Little League games on the Saturdays before scheduled Sunday games.",
  "ATB pitchers are limited to 35-50 pitches on Sunday games, depending on the next weeknight ALL game.",
  "ATB catchers may catch a maximum of 6 innings on Sundays.",
  "No ATB games or practices take place after Memorial Day weekend during ALL playoffs, except practices for players not in District All-Stars."
];

const academyRegistrationUrl =
  "https://arlingtontravelbaseball.org/register-for-6u-7u-academy/";

function Home() {
  const title = "Arlington Travel Baseball | 8U-12U Travel Baseball in Arlington, VA";
  const description =
    "ATB helps Arlington and Northern Virginia families compare programs, view tryouts, understand rec-plus-travel fit, and move into a real registration path.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/",
            title,
            description
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }])
        ]}
      />

      <Hero />

      <section className="feature-strip">
        {quickHits.map((item) => (
          <div key={item} className="feature-pill">
            {item}
          </div>
        ))}
      </section>

      <ProofStrip items={proofItems} />

      <section className="split-section">
        <div className="content-panel">
          <p className="eyebrow">ATB Update</p>
          <h2>A quick spring update for ATB families.</h2>
          <div className="detail-stack">
            <p>
              As we head toward a busy spring, ATB is sharing a few important
              notes, reminders, and opportunities to get involved.
            </p>
            <p>
              The fall work and winter progress are paying off, and it is
              exciting to watch players keep developing as baseball players,
              competitors, teammates, and people.
            </p>
            <p>
              This spring will again balance Little League/rec ball with ATB
              Sunday practices and games. Families are encouraged to reach out
              with ideas, questions, or feedback as the season moves forward.
            </p>
          </div>
          <p className="signature-block">
            <strong>Richie Pacheco</strong>
            <span>ATB President and Director of Baseball Operations</span>
          </p>
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">Inside This Update</p>
          <h2>What families should review right now.</h2>
          <div className="feature-list">
            {insideThisUpdate.map((item) => (
              <div key={item} className="feature-row">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="content-panel">
          <p className="eyebrow">Spring NVTBL Schedule</p>
          <h2>Three Sunday game windows anchor the spring.</h2>
          <p>
            Rec baseball, primarily through Arlington Little League, remains a
            core part of the ATB model. At the same time, ATB teams still need
            access to higher-level competition and consistent team reps during
            the Little League season.
          </p>
          <p>
            After coordination with Arlington Little League leadership, all ATB
            teams will play three Sundays of spring games in April and May.
            Most teams will play doubleheaders through NVTBL, while 8U will
            play single games.
          </p>

          <div className="detail-grid">
            {springSchedule.map((window) => (
              <article key={window.dates} className="mini-card detail-card">
                <p className="eyebrow">{window.dates}</p>
                <h3>Teams scheduled</h3>
                <p>{window.teams}</p>
              </article>
            ))}
          </div>

          <p>
            Games are expected to be away from Arlington, and morning starts
            have been requested so players remain available for Sunday
            afternoon or evening Little League make-up games.
          </p>
          <p className="helper-copy">
            Team-specific timing can still shift as NVTBL finalizes schedules,
            so families should keep checking with team GMs.
          </p>
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">Arm Care</p>
          <h2>Player safety depends on active parent communication.</h2>
          <p>
            ATB and Arlington Little League are aligned on pitch safety and arm
            care. The added Sunday game weekends make it even more important for
            parents to track workload and communicate quickly with both coaches.
          </p>
          <div className="feature-list">
            {armCareRules.map((item) => (
              <div key={item} className="feature-row">
                {item}
              </div>
            ))}
          </div>
          <p className="helper-copy">
            ATB and ALL follow PitchSmart guidelines. If a player throws 37
            pitches on Sunday, for example, Monday and Tuesday become required
            rest days before pitching again on Wednesday.
          </p>
        </div>
      </section>

      <section className="feed-surface">
        <InstagramFeed />
      </section>

      <section className="split-section">
        <div className="content-panel">
          <p className="eyebrow">Upcoming Event</p>
          <h2>Winter Wiffle Ball Bash is set for Saturday, March 7.</h2>
          <p>
            Arlington Travel Baseball and Arlington Little League are co-hosting
            a Winter Wiffle Ball Bash to celebrate the game and the shared
            partnership around player development.
          </p>
          <p>
            Players in Little League Rookies through AAA are eligible. No
            baseball gear is required. Families should dress for the weather and
            be ready to play.
          </p>
          <div className="feature-list">
            <div className="feature-row">Saturday, March 7</div>
            <div className="feature-row">4:00 PM to 6:00 PM</div>
            <div className="feature-row">Gunston Field</div>
          </div>
          <p>
            Families are also encouraged to bring extra or outgrown baseball
            gear for a swap table, including bats, gloves, hats, uniforms,
            cleats, bags, and other equipment.
          </p>
          <p className="helper-copy">
            Registration link pending: add the live Wiffle Ball Bash signup link
            here once it is available.
          </p>
          <div className="stacked-links">
            <Link className="button button-small button-ghost" to="/contact">
              Ask for the registration link
            </Link>
          </div>
        </div>

        <div className="content-panel dark-panel">
          <p className="eyebrow">6-7U Spring Academy</p>
          <h2>Registration is open now for the next generation of Arsenal players.</h2>
          <p>
            ATB is offering a 6-7U Academy this spring with a fun, development-
            focused environment for younger players.
          </p>
          <div className="feature-list">
            <div className="feature-row">Sundays, 12:00 PM to 1:15 PM at Gunston</div>
            <div className="feature-row">April 16 through June 7, except Memorial Day weekend</div>
            <div className="feature-row">Open to players born between May 1, 2018 and April 30, 2020</div>
          </div>
          <p>
            Families are encouraged to invite friends, neighbors, and Little
            League teammates who are ready for an early development-first
            experience.
          </p>
          <div className="stacked-links">
            <a
              className="button button-small"
              href={academyRegistrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Register for the 6-7U Academy
            </a>
            <Link className="button button-small button-ghost" to="/registration">
              Open ATB Registration
            </Link>
          </div>
        </div>
      </section>

      <section className="content-panel">
        <p className="eyebrow">Start Here</p>
        <h2>Keep the next action easy to find.</h2>
        <p>
          Families should not have to hunt for the right page. These are the
          three most useful starting points during the spring season.
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
      </section>

      <section className="content-panel">
        <p className="eyebrow">Parent Search Guides</p>
        <h2>Build visibility around the questions Arlington families already ask.</h2>
        <div className="level-grid compact-grid">
          {parentSearchGuides.map((item) => (
            <article key={item.to} className="mini-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <Link to={item.to} className="inline-link">
                Open page
              </Link>
            </article>
          ))}
        </div>
        <div className="pill-actions">
          {ageGroupLinks.map((slug) => (
            <Link key={slug} className="pill-link" to={`/programs/${slug}`}>
              {slug.toUpperCase()} page
            </Link>
          ))}
        </div>
      </section>

      <SponsorsSection />

      <section className="content-panel">
        <p className="eyebrow">Need Help?</p>
        <h2>Contact ATB for registration, tryouts, and sponsor follow-up.</h2>
        <p>
          Email <a href="mailto:atbarsenal@gmail.com">atbarsenal@gmail.com</a>{" "}
          or call <a href="tel:+17036797756">(703) 679-7756</a>.
        </p>
        <div className="stacked-links">
          <Link className="button button-small button-ghost" to="/contact">
            Open Contact
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
