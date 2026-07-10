import logo from '../assets/logo.png'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const adminParam = searchParams.get('admin') === 'sagar' ? `?admin=sagar` : ''

  const handleSectionClick = (sectionId) => {
    // If on home page, scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

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
            <li><a href={`/${adminParam}`}>Home</a></li>
            <li><a href={`/${adminParam}#groups`} onClick={() => handleSectionClick('groups')}>Groups</a></li>
            <li><a href={`/${adminParam}#members`} onClick={() => handleSectionClick('members')}>Members</a></li>
            <li><a href={`/${adminParam}#fixtures`} onClick={() => handleSectionClick('fixtures')}>Schedule</a></li>
            <li><a href={`/${adminParam}#rules`} onClick={() => handleSectionClick('rules')}>Rules</a></li>
            <li><a href={`/standings${adminParam}`}>Standings</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
