import React from 'react'
import Header from './Components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/home/Home';
import About from './Components/about/About';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App