import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Groups from './components/Groups'
import Members from './components/Members'
import Fixtures from './components/Fixtures'
import Rules from './components/Rules'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Groups />
      <Members />
      <Fixtures />
      <Rules />
      <Footer />
    </div>
  )
}

export default App
