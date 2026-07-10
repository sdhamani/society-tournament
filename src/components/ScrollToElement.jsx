import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToElement() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [hash])

  return null
}
