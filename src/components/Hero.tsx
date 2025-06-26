import {  useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoremIpsum } from "lorem-ipsum";


const lorem = new LoremIpsum();

function Header() {


  return (
    <div id="hero"
    className={`bg-[url('/heroSM.webp')] md:bg-[url('/heroLG.webp')] bg-cover bg-center
    w-full min-h-[60vh] md:min-h-[80vh]
    flex flex-col items-center justify-center gap-4 text-white text-center px-4`}
    >
      <h1 className='font-inter text-[clamp(1.8rem,5vw,3.5rem)] font-bold text-white'>Unlock Your Potential with Fitness Coach</h1>
      <h2 className='font-inter text-[clamp(1.2rem,3vw,2rem)] font-semibold text-white mb-4'>Personalized fitness plans to help you reach your goals</h2>
      <button>
        <a href="" className='font-inter bg-bg text-textDark font-semibold text-center 
        py-4 px-8 rounded-md shadow-md 
        hover:bg-hover hover:text-white active:bg-hover active:text-white 
        transition-all duration-300 ease-in-out'>Book a Free Call</a>
      </button>
    </div>  
  )
}

export default Header
 