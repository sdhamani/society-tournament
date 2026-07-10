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
      { time: '9:30-10:10', group: 'CEREMONY', teamA: 'Opening Ceremony @ Flag Hoisting Area', teamB: '' },
      { time: '10:10-10:30', group: 'Men G1', teamA: 'Divyam + Sanjeev', teamB: 'Srikant + Rohit' },
      { time: '10:30-10:50', group: 'Women G1', teamA: 'Poornima + Animisha', teamB: 'Sayantini + Maya' },
      { time: '10:50-11:10', group: 'Men G1', teamA: 'Avinish + Rohit', teamB: 'Srikant + Sagar' },
      { time: '11:10-11:30', group: 'Women G1', teamA: 'Jigyasa + Animisha', teamB: 'Sonali + Nikita' },
      { time: '11:30-11:50', group: 'Men G1', teamA: 'Avinish + Sagar', teamB: 'Prajwal + Abhishek R' },
      { time: '11:50-12:10', group: 'Women G1', teamA: 'Jigyasa + Maya', teamB: 'Sonali + Animisha' },
      { time: '12:10-12:30', group: 'Men G1', teamA: 'Avinish + Abhishek R', teamB: 'Divyam + Rohit' },
      { time: '12:30-12:50', group: 'Women G1', teamA: 'Poornima + Maya', teamB: 'Sayantini + Rashmi' },
      { time: '12:50-1:10', group: 'Men G1', teamA: 'Avinish + Sanjeev', teamB: 'Prajwal + Sagar' },
      { time: '1:10-1:30', group: 'Women G2', teamA: 'Sheetal + Shamita', teamB: 'Divya + Pakhi' },
      { time: '1:30-4:30', group: 'BREAK', teamA: 'Break', teamB: '' },
      { time: '4:30-4:50', group: 'Seniors', teamA: 'Awadesh Ji + Deepak Ji', teamB: 'Dayanand Ji + Gosh Ji' },
      { time: '4:50-5:10', group: 'Seniors', teamA: 'Agarwal Ji + Dr. Pande Ji', teamB: 'Ram Sagar Ji + Dr. Joshi' },
      { time: '5:10-5:30', group: 'Men G2', teamA: 'Ashish + Suchit', teamB: 'Umang + Amit' },
      { time: '5:30-5:50', group: 'Seniors', teamA: 'Awadesh Ji + Deepak Ji', teamB: 'Agarwal Ji + Dr. Pande Ji' },
      { time: '5:50-6:10', group: 'Men G2', teamA: 'Ashish + Karteek', teamB: 'Tilak + Suchit' },
      { time: '6:10-6:30', group: 'Seniors', teamA: 'Dayanand Ji + Gosh Ji', teamB: 'Ram Sagar Ji + Dr. Joshi' },
      { time: '6:30-6:50', group: 'Men G2', teamA: 'Ashish + Goutham', teamB: 'Rahul + Karteek' },
      { time: '6:50-7:10', group: 'Men G2', teamA: 'Manish + Amit', teamB: 'Rahul + Vinay' },
      { time: '7:10-7:30', group: 'Women G2', teamA: 'Sheetal + Shamita', teamB: 'Megha + Bahula' },
      { time: '7:30-7:50', group: 'Men G2', teamA: 'Manish + Suchit', teamB: 'Tilak + Goutham' },
      { time: '7:50-8:10', group: 'Women G2', teamA: 'Sheetal + Bahula', teamB: 'Divya + Shamita' },
      { time: '8:10-8:30', group: 'Men G2', teamA: 'Ashish + Amit', teamB: 'Manish + Goutham' }
    ],
    sunday: [
      { time: '8:00-8:20', group: 'Kids G1', teamA: 'Anubhav + Bodhan', teamB: 'Yakshit + Tanmay' },
      { time: '8:20-8:40', group: 'Kids G2', teamA: 'Tanush + Abhiram', teamB: 'Kanishk + Joe' },
      { time: '8:40-9:00', group: 'Kids G1', teamA: 'Amogh + Tanmay', teamB: 'Avyukth + Sanav' },
      { time: '9:00-9:20', group: 'Men G2', teamA: 'Rahul + Suchit', teamB: 'Umang + Vinay' },
      { time: '9:20-9:40', group: 'Kids G1', teamA: 'Amogh + Sanav', teamB: 'Yakshit + Nythik' },
      { time: '9:40-10:00', group: 'Men G2', teamA: 'Manish + Vinay', teamB: 'Umang + Goutham' },
      { time: '10:00-10:20', group: 'Women G1', teamA: 'Sayantini + Nikita', teamB: 'Sonali + Maya' },
      { time: '10:20-10:40', group: 'Men G1', teamA: 'Divyam + Sagar', teamB: 'Srikant + Abhishek R' },
      { time: '10:40-11:00', group: 'Women G1', teamA: 'Jigyasa + Rashmi', teamB: 'Sayantini + Animisha' },
      { time: '11:00-11:20', group: 'Men G1', teamA: 'Prajwal + Rohit', teamB: 'Srikant + Sanjeev' },
      { time: '11:20-11:40', group: 'Women G1', teamA: 'Jigyasa + Nikita', teamB: 'Poornima + Rashmi' },
      { time: '11:40-12:00', group: 'Men G1', teamA: 'Divyam + Abhishek R', teamB: 'Prajwal + Sanjeev' },
      { time: '12:00-12:20', group: 'Women G2', teamA: 'Sheetal + Pakhi', teamB: 'Megha + Shamita' },
      { time: '12:20-12:40', group: 'Women G1', teamA: 'Poornima + Nikita', teamB: 'Sonali + Rashmi' },
      { time: '12:40-1:00', group: 'Kids G1', teamA: 'Avyukt + Bodhan', teamB: 'Yakshit + Sanav' },
      { time: '1:00-1:20', group: 'Women G2', teamA: 'Divya + Bahula', teamB: 'Megha + Pakhi' },
      { time: '1:20-1:40', group: 'Kids G1', teamA: 'Anubhav + Nythik', teamB: 'Avyukth + Tanmay' },
      { time: '1:40-2:00', group: 'Women G2', teamA: 'Divya + Pakhi', teamB: 'Megha + Bahula' },
      { time: '2:00-2:20', group: 'Kids G2', teamA: 'Tanush + Advik', teamB: 'Yuvaan + Joe' },
      { time: '2:20-2:40', group: 'Men G2', teamA: 'Rahul + Amit', teamB: 'Tilak + Karteek' },
      { time: '2:40-3:00', group: 'Kids G2', teamA: 'Kanishk + Abhiram', teamB: 'Yuvaan + Advik' },
      { time: '3:00-3:20', group: 'Men G2', teamA: 'Tilak + Vinay', teamB: 'Umang + Karteek' },
      { time: '3:20-3:40', group: 'Kids G2', teamA: 'Kanishk + Advik', teamB: 'Yuvaan + Abhiram' },
      { time: '3:40-5:00', group: 'BREAK', teamA: 'Break Time', teamB: '' },
      { time: '5:00 PM', group: 'FINAL', teamA: 'Final Seniors: Rank 1 + 4', teamB: 'Rank 2 + 3' },
      { time: '5:20 PM', group: 'FINAL', teamA: 'Final Kids G2: Rank 1 + 4', teamB: 'Rank 2 + 3' },
      { time: '5:40 PM', group: 'FINAL', teamA: 'Final Kids G1: Rank 1 + 4', teamB: 'Rank 2 + 3' },
      { time: '6:00 PM', group: 'FINAL', teamA: 'Final Women G2: Rank 1 + 4', teamB: 'Rank 2 + 3' },
      { time: '6:20 PM', group: 'FINAL', teamA: 'Final Men G2: (A)R1 + (I)R2', teamB: '(A)R2 + (I)R1' },
      { time: '6:40 PM', group: 'FINAL', teamA: 'Final Women G1: (A)R1 + (I)R2', teamB: '(A)R2 + (I)R1' },
      { time: '7:00 PM', group: 'FINAL', teamA: 'Final Men G1: (A)R1 + (I)R2', teamB: '(A)R2 + (I)R1' },
      { time: '7:00-8:00', group: 'CEREMONY', teamA: 'Closing Ceremony @ Badminton Court + Snacks', teamB: '' }
    ]
  }

  return (
    <section id="fixtures" className="fixtures">
      <div className="container">
        <h2>🗓️ Match Schedule</h2>

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
              {fixtures[selectedDay].map((fixture, idx) => {
                const isSpecial = fixture.group === 'CEREMONY' || fixture.group === 'BREAK' || fixture.group === 'FINAL'
                return (
                  <tr key={idx} className={isSpecial ? 'special' : ''}>
                    <td className="time">{fixture.time}</td>
                    <td className="group">{fixture.group}</td>
                    <td className="team">{fixture.teamA}</td>
                    <td className="team">{fixture.teamB}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
