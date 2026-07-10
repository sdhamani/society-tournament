import { useState, useEffect } from 'react'
import '../styles/WelcomePopup.css'

export default function WelcomePopup() {
  const [showNotification, setShowNotification] = useState(false)
  const [message, setMessage] = useState({ title: '', text: '', icon: '' })

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('windsor-visited')

    if (!hasVisited) {
      // Determine message based on current time
      const tournamentStart = new Date(2026, 6, 11, 10, 0, 0) // July 11, 2026, 10:00 AM
      const now = new Date()

      if (now >= tournamentStart) {
        // Tournament has started
        setMessage({
          icon: '🎯',
          title: 'Tournament is Live!',
          text: 'Check the standings & schedule for latest updates'
        })
      } else {
        // Tournament hasn't started yet
        setMessage({
          icon: '🎉',
          title: 'Excited for the opening ceremony?',
          text: 'Check the schedule & get ready!'
        })
      }

      // Show notification after 1 second
      const timer = setTimeout(() => {
        setShowNotification(true)
        localStorage.setItem('windsor-visited', 'true')
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setShowNotification(false)
  }

  if (!showNotification) return null

  return (
    <div className="corner-notification">
      <div className="notification-content">
        <div className="notification-icon">{message.icon}</div>
        <div className="notification-text">
          <p className="notification-title">{message.title}</p>
          <p className="notification-message">{message.text}</p>
        </div>
        <button className="notification-close" onClick={handleClose}>✕</button>
      </div>
    </div>
  )
}
