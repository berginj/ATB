const teams = [
  {
    name: "Academy / entry level",
    detail: "Use this slot for the youngest development-first group once the current season lineup is confirmed."
  },
  {
    name: "Younger travel groups",
    detail: "Publish the current active younger teams here with verified coach assignments and contact ownership."
  },
  {
    name: "Core travel groups",
    detail: "Use this space for the main in-season teams once ATB confirms the current roster structure."
  },
  {
    name: "Big-field transition",
    detail: "Publish older-team expectations here only after the season details and coach assignments are final."
  }
];

function Teams() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Teams</p>
        <h1>Keep the team page current, accurate, and easy to trust.</h1>
        <p>
          The old risk here was publishing stale coach or roster info. This page
          now focuses on clean placeholders until ATB confirms the current team
          structure and contact ownership.
        </p>
      </div>

      <div className="level-grid">
        {teams.map((team) => (
          <article key={team.name} className="content-panel">
            <p className="eyebrow">{team.name}</p>
            <h2>{team.name}</h2>
            <p>{team.detail}</p>
            <p className="helper-copy">
              Replace this placeholder with the real coach, practice rhythm, and
              roster packet link for the current season.
            </p>
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
  );
}

export default Teams;
