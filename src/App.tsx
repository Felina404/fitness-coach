import {  useEffect, useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features'
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {


  return (
    <div className="bg-bg">
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
 