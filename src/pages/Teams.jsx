const teams = [
  {
    name: "8U Arsenal",
    coach: "Coach-led academy staff",
    roster: "Foundational reps, small-group instruction, fast feedback."
  },
  {
    name: "9U Arsenal",
    coach: "Coach Fox and development staff",
    roster: "Defensive habits, base running, and early game management."
  },
  {
    name: "10U Arsenal",
    coach: "Professional coaching rotation",
    roster: "Higher-tempo practices and expanded situational work."
  },
  {
    name: "11U Arsenal",
    coach: "Lead coach assigned by season",
    roster: "Transition-focused training for 50/70 gameplay."
  },
  {
    name: "12U Arsenal",
    coach: "Senior ATB coaching group",
    roster: "Advanced baseball IQ, strength prep, and tournament readiness."
  }
];

function Teams() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Teams</p>
        <h1>Five development tracks, one shared standard.</h1>
        <p>
          Use this page for coach assignments, team snapshots, and roster packet
          links when each group is finalized.
        </p>
      </div>

      <div className="level-grid">
        {teams.map((team) => (
          <article key={team.name} className="content-panel">
            <p className="eyebrow">{team.name}</p>
            <h2>{team.coach}</h2>
            <p>{team.roster}</p>
            <a
              className="button button-small button-ghost"
              href={`mailto:atbarsenal@gmail.com?subject=${encodeURIComponent(
                `${team.name} roster packet`
              )}`}
            >
              Request Roster Packet
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Teams;
