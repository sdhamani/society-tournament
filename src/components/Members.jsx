import { useState } from 'react'

export default function Members() {
  const [selectedGroup, setSelectedGroup] = useState('Kids G1')

  const members = {
    'Kids G1': ['Amogh', 'Bodhan', 'Anubhav', 'Sanav', 'Tanmay', 'Yakshit', 'Nythik', 'Avyukth'],
    'Kids G2': ['Tanush', 'Joe', 'Kanishk', 'Advik', 'Yuvaan', 'Abhiram'],
    'Women G1': ['Poornima', 'Animisha', 'Sayantini', 'Maya', 'Jigyasa', 'Sonali', 'Nikita', 'Rashmi'],
    'Women G2': ['Sheetal', 'Shamita', 'Megha', 'Pakhi', 'Bahula', 'Divya'],
    'Men G1': ['Divyam', 'Sanjeev', 'Srikant', 'Rohit', 'Avinish', 'Sagar', 'Prajwal', 'Abhishek R'],
    'Men G2': ['Ashish', 'Suchit', 'Umang', 'Amit', 'Karteek', 'Tilak', 'Manish', 'Goutham', 'Rahul', 'Vinay'],
    'Seniors': ['Awadesh Ji', 'Deepak Ji', 'Dayanand Ji', 'Gosh Ji', 'Agarwal Ji', 'Dr. Pande Ji', 'Ram Sagar Ji', 'Dr. Joshi']
  }

  const groups = Object.keys(members)

  return (
    <section id="members" className="members">
      <div className="container">
        <h2>Tournament Members</h2>

        <div className="group-selector">
          {groups.map(group => (
            <button
              key={group}
              className={`group-btn ${selectedGroup === group ? 'active' : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="members-list">
          <h3>{selectedGroup}</h3>
          <div className="members-grid">
            {members[selectedGroup].map((member, idx) => (
              <div key={idx} className="member-card">
                <span>{member}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
