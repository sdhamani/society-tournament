export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <h1 className="logo">Society Tournament</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#groups">Groups</a></li>
            <li><a href="#members">Members</a></li>
            <li><a href="#fixtures">Fixtures</a></li>
            <li><a href="#rules">Rules</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
