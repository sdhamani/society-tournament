import { useState } from 'react'

export default function Fixtures() {
  const [selectedDay, setSelectedDay] = useState('saturday')

  const fixtures = {
    saturday: [
      { time: '7:30-7:50', group: 'Kids G1', teamA: 'Amogh Chandra + BODHAN', teamB: 'Avyukth V + Nythik Kumar' },
      { time: '7:50-8:10', group: 'Kids G2', teamA: 'Tanush Somaiah + Joe Arya', teamB: 'Kanishk + Advik' },
      { time: '8:10-8:30', group: 'Kids G1', teamA: 'Anubhav + BODHAN', teamB: 'Yakshit Singh + Tanmay Jain' },
      { time: '8:30-8:50', group: 'Kids G2', teamA: 'Tanush Somaiah + Joe Arya', teamB: 'Yuvaan Shetty + Abhiram Menon' },
      { time: '8:50-9:10', group: 'Kids G1', teamA: 'Anubhav + Tanmay Jain', teamB: 'Yakshit Singh + BODHAN' },
      { time: '9:10-9:30', group: 'CEREMONY', teamA: 'Opening Ceremony', teamB: '' },
      { time: '10:10-10:30', group: 'Men G1', teamA: 'Divyam Mangal + Sanjeev Gupta', teamB: 'Srikant Ghosh + Rohit Batra' },
      { time: '10:30-10:50', group: 'Women G1', teamA: 'Poornima M D + Animisha Sanchana', teamB: 'Sayantini Banerjee + Nikita Moolchandani' },
      { time: '10:50-11:10', group: 'Men G1', teamA: 'Avinish + Rohit Batra', teamB: 'Srikant Ghosh + Sagar Dhamani' },
      { time: '11:10-11:30', group: 'Women G1', teamA: 'Jigyasa Mangal + Animisha Sanchana', teamB: 'Sonali Bhat + Maya Gupta' },
      { time: '11:30-11:50', group: 'Men G1', teamA: 'Divyam Mangal + Abhishek Ranjan', teamB: 'Prajwal Nayak + Sanjeev Gupta' },
      { time: '11:50-12:10', group: 'Women G1', teamA: 'Jigyasa Mangal + Maya Gupta', teamB: 'Sonali Bhat + Animisha Sanchana' },
      { time: '12:10-12:30', group: 'Men G1', teamA: 'Avinish + Abhishek Ranjan', teamB: 'Divyam Mangal + Rohit Batra' },
      { time: '12:30-12:50', group: 'Women G1', teamA: 'Poornima M D + Maya Gupta', teamB: 'Sayantini Banerjee + Rashmi Porwal' },
      { time: '12:50-1:10', group: 'Men G1', teamA: 'Avinish + Sanjeev Gupta', teamB: 'Prajwal Nayak + Sagar Dhamani' },
      { time: '1:10-1:30', group: 'Women G2', teamA: 'Sheetal + Shamita Prashanth', teamB: 'Divya + Pakhi Verma' },
      { time: '2:30-2:50', group: 'Men G1', teamA: 'Avinish + Sagar Dhamani', teamB: 'Prajwal Nayak + Abhishek Ranjan' },
      { time: '2:50-3:10', group: 'Men G2', teamA: 'Manish + Amit Kumar', teamB: 'RAHUL GUPTA + Tatikonda Vinay' },
      { time: '3:10-3:30', group: 'Women G2', teamA: 'Sheetal + Shamita Prashanth', teamB: 'Megha + Bahula' },
      { time: '3:30-3:50', group: 'Men G2', teamA: 'Manish + Suchit Mehrotra', teamB: 'Tilak Porwal + Goutham' },
      { time: '3:50-4:10', group: 'Women G2', teamA: 'Sheetal + Bahula', teamB: 'Divya + Shamita Prashanth' },
      { time: '4:10-4:30', group: 'Men G2', teamA: 'Ashish Agarwal + Amit Kumar', teamB: 'Manish + Goutham' },
      { time: '4:30-4:50', group: 'Seniors', teamA: 'Awadesh Ji Shrivastava + Deepak Ji Thakkar', teamB: 'Dayanand Ji + Gosh Ji' },
      { time: '4:50-5:10', group: 'Seniors', teamA: 'N R Agarwal Ji + Dr. Pande Ji', teamB: 'Ram Sagar Ji Mishra + Dr. Sravottam Ji Joshi' },
      { time: '5:10-5:30', group: 'Men G2', teamA: 'Ashish Agarwal + Suchit Mehrotra', teamB: 'Umang Jain + Amit Kumar' },
      { time: '5:30-5:50', group: 'Seniors', teamA: 'Awadesh Ji Shrivastava + Deepak Ji Thakkar', teamB: 'N R Agarwal Ji + Dr. Pande Ji' },
      { time: '5:50-6:10', group: 'Men G2', teamA: 'Ashish Agarwal + Karteek', teamB: 'Tilak Porwal + Suchit Mehrotra' },
      { time: '6:10-6:30', group: 'Seniors', teamA: 'Dayanand Ji + Gosh Ji', teamB: 'Ram Sagar Ji Mishra + Dr. Sravottam Ji Joshi' },
      { time: '6:30-6:50', group: 'Men G2', teamA: 'Ashish Agarwal + Goutham', teamB: 'RAHUL GUPTA + Karteek' }
    ],
    sunday: [
      { time: '8:00-8:20', group: 'Kids G1', teamA: 'Anubhav + Bodhan', teamB: 'Yakshit + Avyukt' },
      { time: '8:20-8:40', group: 'Kids G2', teamA: 'Tanush + Abhiram', teamB: 'Kanishk + Joe Arya' },
      { time: '8:40-9:00', group: 'Kids G1', teamA: 'Amogh + Avyukt', teamB: 'Tanmay + Sanav' },
      { time: '9:00-9:20', group: 'Men G2', teamA: 'Rahul + Suchit', teamB: 'Umang + Vinay' },
      { time: '9:20-9:40', group: 'Kids G1', teamA: 'Amogh + Sanav', teamB: 'Yakshit + Nythik' },
      { time: '9:40-10:00', group: 'Men G1', teamA: 'Avinish + Sanjeev', teamB: 'Prajwal + Sagar' },
      { time: '10:00-10:20', group: 'Women G1', teamA: 'Sayantini + Nikita', teamB: 'Sonali + Maya' },
      { time: '10:20-10:40', group: 'Men G1', teamA: 'Prajwal + Rohit', teamB: 'Srikant + Sanjeev' },
      { time: '10:40-11:00', group: 'Women G1', teamA: 'Poornima + Nikita', teamB: 'Sonali + Rashmi' },
      { time: '11:00-11:20', group: 'Men G1', teamA: 'Divyam + Sagar', teamB: 'Srikant + Abhishek R' },
      { time: '11:20-11:40', group: 'Women G2', teamA: 'Sheetal + Pakhi', teamB: 'Shamita + Bahula' },
      { time: '11:40-12:00', group: 'Men G1', teamA: 'Divyam + Abhishek R', teamB: 'Prajwal + Sanjeev' },
      { time: '12:00-12:20', group: 'Women G2', teamA: 'Sheetal + Bahula', teamB: 'Megha + Shamita' },
      { time: '12:20-12:40', group: 'Kids G2', teamA: 'Kanishk + Abhiram', teamB: 'Yuvaan + Advik' },
      { time: '12:40-1:00', group: 'Women G2', teamA: 'Megha + Bahula', teamB: 'Pakhi + Shamita' },
      { time: '1:00-1:20', group: 'Kids G1', teamA: 'Tanmay + Bodhan', teamB: 'Yakshit + Sanav' },
      { time: '1:20-1:40', group: 'Men G2', teamA: 'Tilak + Vinay', teamB: 'Umang + Karteek' },
      { time: '1:40-2:00', group: 'Kids G1', teamA: 'Anubhav + Nythik', teamB: 'Avyukth + Tanmay' },
      { time: '2:00-2:20', group: 'Seniors', teamA: 'Awadesh Ji + Deepak Ji', teamB: 'Dayanand Ji + Gosh Ji' },
      { time: '2:20-2:40', group: 'Kids G2', teamA: 'Kanishk + Advik', teamB: 'Yuvaan + Abhiram' },
      { time: '2:40-3:00', group: 'Seniors', teamA: 'Awadesh Ji + Deepak Ji', teamB: 'Agarwal Ji + Dr. Pande Ji' },
      { time: '4:00-5:00', group: 'BREAK', teamA: 'Break Time', teamB: '' },
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
                const isSpecial = fixture.group === 'CEREMONY' || fixture.group === 'BREAK'
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
