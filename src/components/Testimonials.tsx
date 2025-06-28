import React from 'react';
import testimonialImg1 from '../assets/testimonial_pic1.webp';
import testimonialImg2 from '../assets/testimonial_pic2.webp';

const data = [
    {
        photo: testimonialImg1,
        name: 'Elena',
        text: 'Maya changes my life. She is a true fitness coach and I can’t thank her enough for helping me reach my goals. '
    },

    {
        photo: testimonialImg2,
        name: 'Mike',
        text: 'I have been using Maya’s services for the past year and I can’t recommend her enough. '
    }
    ,
]

function Testimonials () {
    return (
        <div id="testimonials" className='font-inter max-w-7xl mx-auto py-12 px-4'>
           <h1 className='text-center font-bold text-[clamp(1.5rem,3vw,2rem)] text-textDark m-4 p-4 '>What people say about me...</h1>
            <div className='grid gap-6 px-4 justify-center justify-items-center grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))]'
              style={{
                
                }}>
                {data.map((item,i) => (
                    
                    <div key={i}
                    className='flex flex-col md:flex-row gap-6 items-center w-full max-w-sm'
                    >
                        <img src={item.photo} alt="testimonial" className='shrink-0 rounded-full w-24 h-24 object-cover'></img>
                        <div className='text-left space-y-2'>
                            <h2 className='text-center font-semibold  text-[clamp(1rem,2vw,1.2rem)] text-textDark'>{item.name}</h2>
                            <p className="italic text-textDark/80 text-[clamp(1rem,2vw,1.2rem)] leading-relaxed relative before:content-['“'] before:text-accent before:text-3xl before:absolute before:-left-4">
                            {item.text}
                            </p>
                            </div>
                        
                        </div>
                ))}
            </div>
        </div>
        
    )
}

export default Testimonials;