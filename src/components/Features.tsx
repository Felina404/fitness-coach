import React from 'react';

const featureData = [
  {
    title: 'Custom Workout Plans',
    text: 'Our personalized workout plans are designed to help you achieve your fitness goals. We take into account your current fitness level, your goals, and your preferences to create a workout plan that is tailored to your needs.',
  },
  {
    title: 'Nutrition Guidance',
    text: 'Get meal plans and nutritional advice to fuel your fitness journey. We focus on sustainable, balanced eating that works for your lifestyle and goals.',
  },
  {
    title: 'Weekly Check-Ins',
    text: 'Set goals, track your progress, and receive feedback on your performance. We provide regular check-ins to help you stay on track and make adjustments to your plan as needed.',
  },
  {
    title: 'Real Results',
    text: 'Our virtual coaching sessions provide real-time feedback and guidance to help you achieve your fitness goals. We work with you one-on-one to create a personalized plan that is tailored to your needs.',
  },
    
];

function Features() {
  return (
    <section id="features" className="font-inter px-4 py-8 bg-bg">
        <h1 className='text-center font-bold text-[clamp(1.5rem,3vw,2rem)] text-textDark m-4 p-4 '>Our Features</h1>
      <div className="max-w-sm sm:max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featureData.map((feature, i) => (
          <div
            key={i}
            className="w-full bg-cards border border-secondary/40 rounded-2xl p-6 shadow-md transition hover:shadow-lg hover:border-secondary/80 active:border-secondary/80 flex flex-col items-center gap-4"
          >
            <h2 className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-center font-semibold text-textDark">
              {feature.title}
            </h2>
            <p className="text-textDark/80 text-center leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Features;