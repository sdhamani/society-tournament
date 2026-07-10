export default function Members() {
  const members = [
    'Amogh', 'Bodhan', 'Anubhav', 'Sanav', 'Tanmay', 'Yakshit', 'Nythik', 'Avyukth',
    'Tanush', 'Joe', 'Kanishk', 'Advik', 'Yuvaan', 'Abhiram',
    'Poornima', 'Animisha', 'Sayantini', 'Maya', 'Jigyasa', 'Sonali', 'Nikita', 'Rashmi',
    'Sheetal', 'Shamita', 'Megha', 'Pakhi', 'Bahula', 'Divya',
    'Divyam', 'Sanjeev', 'Srikant', 'Rohit', 'Avinish', 'Sagar', 'Prajwal', 'Abhishek R',
    'Ashish', 'Suchit', 'Umang', 'Amit', 'Karteek', 'Tilak', 'Manish', 'Goutham', 'Rahul', 'Vinay',
    'Awadesh Ji', 'Deepak Ji', 'Dayanand Ji', 'Gosh Ji', 'Agarwal Ji', 'Dr. Pande Ji', 'Ram Sagar Ji', 'Dr. Joshi'
  ]

  return (
    <section id="members" className="members">
      <div className="container">
        <h2>Tournament Members</h2>

        <div className="members-list">
          <div className="members-grid">
            {members.map((member, idx) => (
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
