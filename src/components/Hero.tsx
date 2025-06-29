import {  useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoremIpsum } from "lorem-ipsum";
import { motion } from 'framer-motion';

const lorem = new LoremIpsum();

function Header() {


  return (
    <div id="hero"
    className={`bg-[url('/heroSM.webp')] md:bg-[url('/heroLG.webp')] bg-cover bg-center
    w-full min-h-[60vh] md:min-h-[80vh]
    flex flex-col items-center justify-center gap-4 text-white text-center px-4`}
    >
      
      <motion.h1 
      className='font-inter text-[clamp(1.8rem,5vw,3.5rem)] font-bold text-white'
        initial={{ opacity: 0, y: 30}}
        animate={{ opacity: 1, y: 0,}}
        transition={{ duration: 1.5 }}
      >Unlock Your Potential with Fitness Coach  
      </motion.h1 >


      <motion.h2 
      className='font-inter text-[clamp(1.2rem,3vw,2rem)] font-semibold text-white mb-4'
      initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >Personalized fitness plans to help you reach your goals
      </motion.h2>
      
      
        <a href="mailto:mayaFittness@gmail.com" className='font-inter bg-bg text-textDark font-semibold text-center 
        py-4 px-8 rounded-md shadow-md 
        hover:bg-hover hover:text-white active:bg-hover active:text-white 
        transition-all duration-300 ease-in-out'>Book a Free Call</a>
      
    </div>  
  )
}

export default Header
 