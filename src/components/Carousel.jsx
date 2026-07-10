import { useState, useEffect } from 'react'
import '../styles/Carousel.css'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, image: '/src/assets/img1.jpg', title: 'Winners Celebration' },
    { id: 2, image: '/src/assets/img2.jpg', title: 'Team Group Photo' },
    { id: 3, image: '/src/assets/img3.jpg', title: 'Medal Winners' },
    { id: 4, image: '/src/assets/img4.jpg', title: 'Champions' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>

        <button className="carousel-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
