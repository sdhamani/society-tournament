import Carousel from './Carousel'

export default function Hero() {
  return (
    <>
      <section id="home" className="hero-mini">
        <div className="container">
          <div className="date-info">
            <p>🏸 July 11-12, 2026 🏸</p>
          </div>
        </div>
      </section>
      <Carousel />
    </>
  )
}
