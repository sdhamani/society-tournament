import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Groups from './components/Groups'
import Members from './components/Members'
import Fixtures from './components/Fixtures'
import Rules from './components/Rules'
import Footer from './components/Footer'
import ScoreEntry from './components/ScoreEntry'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Groups />
              <Members />
              <Fixtures />
              <Rules />
            </>
          } />
          <Route path="/scores" element={<ScoreEntry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
