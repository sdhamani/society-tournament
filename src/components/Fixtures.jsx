import { useState } from 'react'

export default function Fixtures() {
  const [selectedDay, setSelectedDay] = useState('saturday')

  const fixtures = {
    saturday: [
      { time: '7:50-8:10', group: 'Kids G1', teamA: 'Amogh + Bodhan', teamB: 'Avyukth + Nythik' },
      { time: '8:10-8:30', group: 'Kids G2', teamA: 'Tanush + Joe', teamB: 'Kanishk + Advik' },
      { time: '8:30-8:50', group: 'Kids G1', teamA: 'Anubhav + Sanav', teamB: 'Amogh + Nythik' },
      { time: '8:50-9:10', group: 'Kids G2', teamA: 'Tanush + Joe', teamB: 'Yuvaan + Abhiram' },
      { time: '9:10-9:30', group: 'Kids G1', teamA: 'Anubhav + Tanmay', teamB: 'Yakshit + Bodhan' },
      { time: '9:30-10:10', group: '-', teamA: 'Opening Ceremony @ Flag Hoisting Area + Snacks', teamB: '' },
      { time: '10:10-10:30', group: 'Men G1', teamA: 'Divyam + Sanjeev', teamB: 'Srikant + Rohit' },
      { time: '10:30-10:50', group: 'Women G1', teamA: 'Poornima + Animisha', teamB: 'Sayantini + Maya' },
    ],
    sunday: [
      { time: '8:00-8:20', group: 'Kids G1', teamA: 'Anubhav + Bodhan', teamB: 'Yakshit + Tanmay' },
      { time: '8:20-8:40', group: 'Kids G2', teamA: 'Tanush + Abhiram', teamB: 'Kanishk + Joe' },
      { time: '8:40-9:00', group: 'Kids G1', teamA: 'Amogh + Tanmay', teamB: 'Avyukth + Sanav' },
      { time: '9:00-9:20', group: 'Men G2', teamA: 'Rahul + Suchit', teamB: 'Umang + Vinay' },
      { time: '12:00-12:20', group: 'Women G2', teamA: 'Sheetal + Pakhi', teamB: 'Megha + Bahula' },
      { time: '5:00 PM', group: 'Final Seniors', teamA: 'Rank 1 + Rank 4', teamB: 'Rank 2 + Rank 3' },
    ]
  }

  return (
    <section id="fixtures" className="fixtures">
      <div className="container">
        <h2>Match Schedule</h2>

        <div className="day-selector">
          <button
            className={`day-btn ${selectedDay === 'saturday' ? 'active' : ''}`}
            onClick={() => setSelectedDay('saturday')}
          >
            Saturday, July 11
          </button>
          <button
            className={`day-btn ${selectedDay === 'sunday' ? 'active' : ''}`}
            onClick={() => setSelectedDay('sunday')}
          >
            Sunday, July 12
          </button>
        </div>

        <div className="fixtures-table">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Group</th>
                <th>Team A</th>
                <th>Team B</th>
              </tr>
            </thead>
            <tbody>
              {fixtures[selectedDay].map((fixture, idx) => (
                <tr key={idx} className={fixture.group === '-' ? 'ceremony' : ''}>
                  <td className="time">{fixture.time}</td>
                  <td className="group">{fixture.group}</td>
                  <td className="team">{fixture.teamA}</td>
                  <td className="team">{fixture.teamB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
