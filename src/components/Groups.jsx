export default function Groups() {
  const groups = [
    {
      name: "Kids G1",
      description: "Younger Kids Group",
      color: "#8B6F47"
    },
    {
      name: "Kids G2",
      description: "Older Kids Group",
      color: "#6B4423"
    },
    {
      name: "Women G1",
      description: "Senior Women",
      color: "#A0826D"
    },
    {
      name: "Women G2",
      description: "Junior Women",
      color: "#9B7659"
    },
    {
      name: "Men G1",
      description: "Senior Men",
      color: "#7A5C3E"
    },
    {
      name: "Men G2",
      description: "Junior Men",
      color: "#8B6639"
    },
    {
      name: "Seniors",
      description: "Senior Players",
      color: "#6B4423"
    }
  ]

  return (
    <section id="groups" className="groups">
      <div className="container">
        <h2>Tournament Groups</h2>
        <div className="groups-grid">
          {groups.map((group, idx) => (
            <div key={idx} className="group-card" style={{ borderLeftColor: group.color }}>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
