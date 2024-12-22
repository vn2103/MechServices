import { useState } from 'react'
import './App.css'
import Home from './pages/home/home';
import ReferAndEarn from './pages/refer/refer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/refer" element={<ReferAndEarn />} />
      </Routes>
    </Router>
  )
}

export default App
