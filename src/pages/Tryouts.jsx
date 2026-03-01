const tryoutWindows = [
  {
    title: "8U Academy Identification",
    date: "March 14, 2026",
    detail: "Gunston turf field, 12:00 PM to 1:15 PM"
  },
  {
    title: "9U-10U Evaluation Session",
    date: "March 21, 2026",
    detail: "Barcroft complex, 10:00 AM to 12:00 PM"
  },
  {
    title: "11U-12U Supplemental Tryout",
    date: "April 11, 2026",
    detail: "Yorktown area field, 1:00 PM to 3:00 PM"
  }
];

function Tryouts() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Tryouts</p>
        <h1>Evaluation windows built for efficient, low-friction sign-up.</h1>
        <p>
          Publish confirmed dates here, keep the registration link prominent,
          and let Instagram carry reminders, recaps, and player energy.
        </p>
      </div>

      <div className="page-grid">
        {tryoutWindows.map((window) => (
          <article key={window.title} className="content-panel">
            <p className="eyebrow">{window.date}</p>
            <h2>{window.title}</h2>
            <p>{window.detail}</p>
            <a
              className="button button-small"
              href="https://arlingtontravelbaseball.org/register/"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>
          </article>
        ))}
      </div>

      <div className="content-panel dark-panel">
        <p className="eyebrow">Note</p>
        <h2>Swap these sample dates with confirmed tryout sessions before going live.</h2>
        <p>
          The page is structured for quick edits, so a single content update is
          all that is needed before each new season opens.
        </p>
      </div>
    </section>
  );
}

export default Tryouts;
