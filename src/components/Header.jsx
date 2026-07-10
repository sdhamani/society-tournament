import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="brand-section">
            <img src={logo} alt="Windsor Troika Logo" className="brand-logo" />
            <div className="brand-text">
              <h1 className="brand-name">Windsor Troika</h1>
              <p className="brand-tagline">Mid-Term Badminton Tournament 2026</p>
              <p className="brand-date">🏸 July 11-12, 2026 🏸</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#groups">Groups</a></li>
            <li><a href="/#members">Members</a></li>
            <li><a href="/#fixtures">Schedule</a></li>
            <li><a href="/#rules">Rules</a></li>
            <li><a href="/scores">Scores</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
