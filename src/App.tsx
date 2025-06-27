import {  useEffect, useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {


  return (
    <div className="bg-bg">
      <Header />
      <Hero />
      <About />
      <Features />
    </div>
  )
}

export default App
 