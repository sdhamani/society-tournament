import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Groups from './components/Groups'
import Members from './components/Members'
import FixturesWithAdmin from './components/FixturesWithAdmin'
import Rules from './components/Rules'
import Footer from './components/Footer'
import Standings from './components/Standings'

function HomePage() {
  return (
    <>
      <Hero />
      <Groups />
      <Members />
      <FixturesWithAdmin />
      <Rules />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
