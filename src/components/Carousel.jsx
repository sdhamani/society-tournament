import { useState, useEffect } from 'react'
import '../styles/Carousel.css'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const slides = [
    { id: 2, image: '/img2.jpg', title: 'Team Group Photo' },
    { id: 1, image: '/img1.jpg', title: 'Winners Celebration' },
    { id: 5, image: '/img5.jpg', title: 'Team Victory' },
    { id: 4, image: '/img4.jpg', title: 'Champions' },
    { id: 3, image: '/img3.jpg', title: 'Medal Winners' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
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
