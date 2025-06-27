import React from 'react';
import aboutImage from '../assets/aboutImage.webp';

function About () {
    return (
        <div id="about" className='bg-bg m-2 p-2 flex flex-col gap-4 items-center justify-center md:flex-row'>
            <div className='flex justify-center'>
                 <img src={aboutImage} alt='MayaPhoto' className='max-w-[80%] lg:max-w-[50%]  rounded-md shadow-md'/>
            </div>
           
            <div className='p-4 mx-auto space-y-4 text-textDark leading-relaxed text-[clamp(1rem,2vw,1.25em)]'>
                <p><span className='italic font-semibold'>Hi! I'm Maya </span> and a fitness coach with over 10 years of experience. 
                I've worked with clients of all sizes and shapes, from small fitness enthusiasts to large 
                corporations. I specialize in helping clients achieve their fitness goals and 
                reach their full potential.</p>
                <p>I'm passionate about fitness and I believe that everyone should have access 
                    to the tools they need to achieve their fitness goals. That's why I created
                    Fitness Coach, a personalized fitness plan that helps you reach your goals 
                    and achieve your full potential.</p>
                <p>Whether you're just starting out or you're looking to take your fitness to the 
                    next level, I'm here to help you. I'm available to work with you one-on-one or 
                    as a virtual coach. Contact me today to schedule a free consultation and see how I 
                    can help you achieve your fitness goals.</p>
            </div>
            
        </div>
    )
}

export default About;