import React from 'react'
import Header from './Components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/home/Home';
import About from './Components/about/About';
import Coursehome from './Components/allcourses/Coursehome';
import Team from './Components/team/Team';
import Price from './Components/pricing/Price';
import Blog from './Components/blog/Blog';
import Contact from './Components/contact/Contact';
import Footer from './Components/common/footer/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course'  element={<Coursehome />} />
          <Route path='/team'  element={<Team />} />
          <Route path='/pricing'  element={<Price />} />
          <Route path='/journal'  element={<Blog />} />
          <Route path='/contact'  element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App