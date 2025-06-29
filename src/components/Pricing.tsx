import {  useEffect, useState } from 'react'



function Pricing() {


  return (
    <div id="pricing"className='font-inter flex flex-col items-center justify-center gap-6 py-8 px-4'>
        <h1 className='font-bold text-[clamp(1.5rem,3vw,2rem)] text-textDark'>Pricing</h1>
        <div className='flex flex-col gap-6 md:flex-row justify-center items-center w-full'>
             <div
        className='w-full max-w-xs bg-cards border border-secondary/40 rounded-2xl p-6 
        shadow-md transition hover:shadow-lg hover:border-secondary/80 
        active:border-secondary/80 flex flex-col items-center gap-4'>
        <h1 className='text-[clamp(1.25rem,2.5vw,1.5rem)] text-center font-semibold text-textDark'>Monthly Coaching - $199/month</h1>
        <h2 className='text-[clamp(1.1rem,2.2vw,1.2rem)] text-center text-textDark'>What's Included</h2>
        <ul className='space-y-4 text-textDark/80 list-inside'>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Personalized fitness plans</li>
            <li>  <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Weekly check-ins</li>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Progress tracking</li>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Goal setting</li>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Nutrition Guidance</li>
        </ul>
        <a href="mailto:mayaFittness@gmail.com" className='font-inter bg-bg text-textDark font-semibold text-center 
        py-4 px-8 rounded-md shadow-md 
        hover:bg-hover hover:text-white active:bg-hover active:text-white 
        transition-all duration-300 ease-in-out'>Get Started</a>
        </div>

        <div 
        className='w-full max-w-xs bg-cards border border-secondary/40 rounded-2xl p-6 
        shadow-md transition hover:shadow-lg hover:border-secondary/80 
        active:border-secondary/80 flex flex-col items-center gap-4'>
        <h1 className='text-[clamp(1.25rem,2.5vw,1.5rem)] text-center font-semibold text-textDark'>Yearly Coaching - <span className='text-red-400'>$1800</span>/year</h1>
        <h2 className='text-[clamp(1.1rem,2.2vw,1.2rem)] text-center text-textDark'>What's Included</h2>
        <ul className='space-y-4 text-textDark/80 list-inside'>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Personalized fitness plans</li>
            <li>  <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Weekly check-ins</li>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Progress tracking</li>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Goal setting</li>
            <li> <span className='text-green-600 font-bold text-lg mr-2'>✔</span> Nutrition Guidance</li>
        </ul>
        <a href="mailto:mayaFittness@gmail.com" className='font-inter bg-bg text-textDark font-semibold text-center 
        py-4 px-8 rounded-md shadow-md 
        hover:bg-hover hover:text-white active:bg-hover active:text-white 
        transition-all duration-300 ease-in-out'>Get Started</a>
        </div>
        </div>
       
    </div>
      
  )
}

export default Pricing;
 