export default function Rules() {
  const rules = [
    {
      number: 1,
      title: "Match Format and Scoring",
      items: [
        "Only Doubles matches will be played. No Singles matches.",
        "Matches will consist of a maximum of three (3) sets.",
        "Each match set will be played to 21 points.",
        "The team that wins two (2) sets first will be declared the winner.",
        "If a team wins the first two sets (2–0), the third set will not be played."
      ]
    },
    {
      number: 2,
      title: "Court Boundaries",
      items: [
        "If the shuttlecock touches the ceiling at any point during a rally, the point will be awarded to the opposing team."
      ]
    },
    {
      number: 3,
      title: "Substitution Rule (Strict)",
      items: [
        "If a registered player is unable to play, they may only be substituted by a same skill player.",
        "If no valid skill substitute is available, or if the rule is violated, the team will forfeit the match and points will be given to the opposite team."
      ]
    },
    {
      number: 4,
      title: "Equipment",
      items: [
        "Only non-marking shoes are allowed on the court.",
        "Players without appropriate footwear may play barefoot, though it is not recommended due to risk of injury."
      ]
    },
    {
      number: 5,
      title: "Tournament Points",
      items: [
        "The winning team will earn 2 points toward their group standings.",
        "Loss: 0 points."
      ]
    },
    {
      number: 6,
      title: "Player Safety and Well-being",
      items: [
        "Ensure proper warm-up before your match to prevent injuries.",
        "Drink water regularly to stay hydrated."
      ]
    },
    {
      number: 7,
      title: "Winners and Pairing",
      items: [
        "Winners will be declared in each group (Men's M1, Men's M2, Women's W1, Women's W2, Kids K1, Kids K2, Seniors).",
        "Floating pairs/changing pairs concept is used.",
        "Each player of the winning pair will earn 2 points for each match.",
        "Each player of the losing pair will earn 0 points for each match.",
        "Points will be accumulated for each individual player for each valid match.",
        "Ranking is decided based on highest number of points earned.",
        "In case of tie, player winning matches with maximum gap gets advantage.",
        "Pairing for Final Matches is based on individual skill level and ranking."
      ]
    },
    {
      number: 8,
      title: "Point Disputes and Fair Play",
      items: [
        "Following conditions are considered faults:",
        "  • Carrying/scooping the shuttle",
        "  • Same player hits shuttle twice or both doubles partners touch shuttle on same return",
        "  • Touching net with body/racket during rally",
        "Frame + strings in one continuous hit will be considered a legal hit.",
        "Racket follows through over net after legal hit will be considered legal.",
        "Any debate or disagreement regarding points during play is strictly prohibited.",
        "Whatever the umpire calls will be considered final and binding."
      ]
    },
    {
      number: 9,
      title: "Umpiring Responsibilities",
      items: [
        "Umpiring will be conducted by players from the two groups that are not participating in that specific match.",
        "Umpires must remain neutral, attentive, and fair throughout the match."
      ]
    }
  ]

  return (
    <section id="rules" className="rules">
      <div className="container">
        <h2>📋 Tournament Rules</h2>
        <div className="rules-container">
          {rules.map((section, idx) => (
            <div key={idx} className="rules-section">
              <div className="rule-header">
                <span className="rule-number">{section.number}</span>
                <h3>{section.title}</h3>
              </div>
              <ul className="rule-items">
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
