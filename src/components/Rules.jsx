export default function Rules() {
  const rules = [
    {
      category: "Match Format",
      items: [
        "Best of 3 games per match",
        "First to 21 points wins a game",
        "Win by 2 points margin required",
        "Deuce at 20-20 applies"
      ]
    },
    {
      category: "Player Conduct",
      items: [
        "Players must arrive 10 minutes before their match",
        "Respectful conduct towards opponents and officials",
        "No abusive language or unsportsmanlike behavior",
        "Disputes to be resolved by match referee"
      ]
    },
    {
      category: "Equipment",
      items: [
        "Use approved badminton racquets only",
        "Official shuttlecock provided by tournament",
        "Proper sports attire required",
        "Non-marking shoes mandatory on court"
      ]
    },
    {
      category: "Scoring & Ranking",
      items: [
        "Win = 2 points, Loss = 0 points",
        "Bye = 1 point",
        "Head-to-head used for tie-breaking",
        "Top 4 teams from each group qualify for finals"
      ]
    }
  ]

  return (
    <section id="rules" className="rules">
      <div className="container">
        <h2>Tournament Rules</h2>
        <div className="rules-grid">
          {rules.map((section, idx) => (
            <div key={idx} className="rules-card">
              <h3>{section.category}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
