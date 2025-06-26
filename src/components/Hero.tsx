import {  useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

function Header() {


  return (
    <>
      <div id='about'>
        <h1 className='text-5xl'>About</h1>
        <p>{lorem.generateParagraphs(5)}</p>
    </div>

       <div id='features'>
        <h1 className='text-5xl'>features</h1>
        <p>{lorem.generateParagraphs(5)}</p>
    </div>

     <div id='testimonials'>
        <h1 className='text-5xl'>testimonials</h1>
        <p>{lorem.generateParagraphs(5)}</p>
    </div>

     <div id='pricing'>
        <h1 className='text-5xl'>pricing</h1>
        <p>{lorem.generateParagraphs(5)}</p>
    </div>

     <div id='faq'>
        <h1 className='text-5xl'>faq</h1>
        <p>{lorem.generateParagraphs(5)}</p>
    </div>

     <div id='contact'>
        <h1 className='text-5xl'>contact</h1>
        <p>{lorem.generateParagraphs(50)}</p>
    </div>


    </>
  

    
  )
}

export default Header
 