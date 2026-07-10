import Carousel from './Carousel'

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Windsor Troika</h1>
            <h2>Mid Term Badminton Tournament 2026</h2>
            <p className="hero-date">July 11-12, 2026</p>
            <p className="tagline">🏸 Experience Excellence in Badminton 🏸</p>
          </div>
        </div>
      </section>
      <Carousel />
    </>
  )
}
