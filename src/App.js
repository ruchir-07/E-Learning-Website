import React from 'react'
import Header from './Components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/home/Home';
import About from './Components/about/About';
import Coursehome from './Components/allcourses/Coursehome';
import Team from './Components/team/Team';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/course'  element={<Coursehome />} />
          <Route path='/team'  element={<Team />} />
        </Routes>
      </Router>
    </>
  )
}

export default App