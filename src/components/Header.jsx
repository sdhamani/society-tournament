import logo from '../assets/logo.png'
import { useSearchParams } from 'react-router-dom'

export default function Header() {
  const [searchParams] = useSearchParams()
  const adminParam = searchParams.get('admin') ? `?admin=${searchParams.get('admin')}` : ''

  const handleNavClick = (e, sectionId) => {
    if (adminParam) {
      e.preventDefault()
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
            <li><a href={`/${adminParam}#groups`} onClick={(e) => handleNavClick(e, 'groups')}>Groups</a></li>
            <li><a href={`/${adminParam}#members`} onClick={(e) => handleNavClick(e, 'members')}>Members</a></li>
            <li><a href={`/${adminParam}#fixtures`} onClick={(e) => handleNavClick(e, 'fixtures')}>Schedule</a></li>
            <li><a href={`/${adminParam}#rules`} onClick={(e) => handleNavClick(e, 'rules')}>Rules</a></li>
            <li><a href={`/standings${adminParam}`}>Standings</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
