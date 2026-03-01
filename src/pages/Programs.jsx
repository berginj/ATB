import { Link } from "react-router-dom";

const levels = [
  {
    name: "8U",
    focus: "Academy-style fundamentals, athletic movement, and confidence-building reps."
  },
  {
    name: "9U",
    focus: "Core mechanics, defensive footwork, base running, and team habits."
  },
  {
    name: "10U",
    focus: "Advanced defensive reads, situational offense, and stronger team play."
  },
  {
    name: "11U",
    focus: "50/70 transition prep, off-speed adjustments, and game-speed decisions."
  },
  {
    name: "12U",
    focus: "Complete player development, strength work, and preparation for the big field."
  }
];

const seasons = [
  "Fall: NVTBL Sunday doubleheaders and mid-week practices",
  "Winter: Indoor hitting, strength, conditioning, and agility",
  "Spring: Rec league support plus focused ATB training windows",
  "Summer: Tournament play and high-rep competition"
];

function Programs() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Programs</p>
        <h1>A clearer development path, paired with a cleaner next step.</h1>
        <p>
          Every team is designed to build durable fundamentals first, then add
          game awareness, speed, strength, and competitive confidence.
        </p>
      </div>

      <div className="level-grid">
        {levels.map((level) => (
          <article key={level.name} className="content-panel">
            <p className="eyebrow">{level.name}</p>
            <h2>{level.name} Development Track</h2>
            <p>{level.focus}</p>
            <Link className="button button-small button-ghost" to="/tryouts">
              View Tryouts
            </Link>
          </article>
        ))}
      </div>

      <div className="content-panel">
        <p className="eyebrow">Season Rhythm</p>
        <h2>Training that stays connected all year</h2>
        <div className="feature-list">
          {seasons.map((item) => (
            <div key={item} className="feature-row">
              {item}
            </div>
          ))}
        </div>
        <p className="helper-copy">
          Additional program-specific pages can expand once ATB confirms the
          current season lineup.
        </p>
      </div>
    </section>
  );
}

export default Programs;
