export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Windsor Troika</h4>
            <p>Mid Term Badminton Tournament 2026</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Tilak: <a href="tel:+919379651074">9379651074</a></p>
            <p>Sagar: <a href="tel:+919403727501">9403727501</a></p>
          </div>
          <div className="footer-section">
            <h4>Location</h4>
            <p>Badminton Court</p>
            <p>July 11-12, 2026</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Windsor Troika. All rights reserved by Decor Aesthetic.</p>
          <p className="disclaimer">📋 Live scores may take time to update. Please contact the organizers for any questions or concerns regarding match results.</p>
          <p className="disclaimer">ℹ️ This website is for informational purposes only and should not be relied upon as the sole source of information. For final decisions, please consult with the tournament organizers.</p>
        </div>
      </div>
    </footer>
  )
}
