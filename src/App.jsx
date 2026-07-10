import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import LiveStream from './components/LiveStream'
import FixturesWithAdmin from './components/FixturesWithAdmin'
import Rules from './components/Rules'
import Footer from './components/Footer'
import Standings from './components/Standings'
import AdminSettings from './components/AdminSettings'
import InitializeDatabase from './components/InitializeDatabase'
import ScrollToElement from './components/ScrollToElement'
import WelcomePopup from './components/WelcomePopup'

function HomePage() {
  return (
    <>
      <Hero />
      <LiveStream />
      <FixturesWithAdmin />
      <Rules />
    </>
  )
}

function App() {
  const [initialized, setInitialized] = useState(false)

  return (
    <Router>
      <ScrollToElement />
      <WelcomePopup />
      <div className="app">
        <InitializeDatabase onInitialized={() => setInitialized(true)} />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
