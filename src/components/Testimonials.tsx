import React from 'react';
import testimonialImg1 from '../assets/testimonial_pic1.webp';
import testimonialImg2 from '../assets/testimonial_pic2.webp';
import testimonialImg3 from '../assets/testimonial_pic3.webp';
import testimonialImg4 from '../assets/testimonial_pic4.webp';
import testimonialImg5 from '../assets/testimonial_pic5.webp';

const data = [
    {
        photo: testimonialImg1,
        name: 'Elena',
        text: 'Maya changes my life. She is a true fitness coach and I can’t thank her enough for helping me reach my goals. ',
        stars: 4.5
    },

    {
        photo: testimonialImg2,
        name: 'Mike',
        text: 'I have been using Maya’s services for the past year and I can’t recommend her enough. ', 
        stars: 5
    }
    ,
     {
        photo: testimonialImg3,
        name: 'Debra',
        text: 'Great service! Her personalized workout plans are tailored to my needs and my goals. ',
        stars: 4.5
    }
    ,
     {
        photo: testimonialImg4,
        name: 'Lisa',
        text: 'Maya is a great fitness coach. Her workout plans are challenging and motivating. I highly recommend her services. ',
        stars: 4.5
    }
    ,
     {
        photo: testimonialImg5,
        name: 'John',
        text: 'I had fun working with Maya. Challenging workouts and personalized plans made it easy to reach my goals. ',
        stars: 5
    }
    ,
]

function getStars ({rating} : {rating: number}) {
    // return Array(Math.floor(rating)).fill(1);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if ( i <= rating) {
            stars.push(<i className='fa-solid fa-star text-yellow-500'></i>);
        }
        else if (rating + 0.5 >=i ) {
            stars.push(<i className='fa-solid fa-star-half-stroke text-yellow-400'></i>);
        }
        else {
            stars.push(<i className='fa-solid fa-star text-gray-400'></i>);
        }
        
    }

    return <div className='flex gap-1'>{stars}</div>
}

function Testimonials () {
    return (
        <div id="testimonials" className='font-inter max-w-7xl mx-auto py-12 px-4'>
           <h1 className='text-center font-bold text-[clamp(1.5rem,3vw,2rem)] text-textDark m-4 p-4 '>What people say about me...</h1>
            <div className='grid gap-6 px-4 justify-center justify-items-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]'
              style={{
                
                }}>
                {data.map((item,i) => (
                    
                    <div key={i}
                    className='flex flex-col md:flex-row gap-6 items-center w-full max-w-sm'
                    >
                        <img src={item.photo} alt="testimonial" className='shrink-0 rounded-full w-24 h-24 object-cover'></img>
                        <div className='text-left space-y-2'>
                            <h2 className='text-center font-semibold  text-[clamp(1rem,2vw,1.2rem)] text-textDark'>{item.name}</h2>
                            <p className="italic text-textDark/80 text-[clamp(1rem,2vw,1.2rem)] leading-relaxed relative before:content-['“'] before:text-accent before:text-4xl before:absolute before:-left-4">
                            {item.text}
                            </p>
                            <div className='flex items-center justify-center md:justify-start gap-2'>
                                 {getStars({rating: item.stars})}
                                </div>
                           
                            </div>
                        
                        </div>
                ))}
            </div>
        </div>
        
    )
}

export default Testimonials;