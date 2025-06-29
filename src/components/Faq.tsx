import React,{useState} from 'react';

const data = [
  {
    q: 'Is this beginner-friendly?',
    a: 'Yes! Everything is tailored to your level.',
  },

    {
    q: 'Can I cancel anytime?',
    a: 'Yes, there’s no contract.',
  },

    {
    q: 'Do you provide a diet plan?',
    a: 'Yes, customized for you.',
  },

     {
    q: 'What is the cancellation policy?',
    a: 'We do not provide a cancellation policy. You can cancel anytime.',
  },
  
 
];

function Faq () {
    
    const [openIndex, setOpenIndex] = useState<null | number>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    }

    return (
        <div id="FAQ" className='font-inter'>
            <h1 className='text-center font-bold text-[clamp(1.5rem,3vw,2rem)] text-textDark m-4 p-4 '>FAQ</h1>
            <div className="w-fit min-w-[16rem] max-w-full mx-auto space-y-4">
                {data.map((item, i) => (
                    <div key={i} className='p-4 bg-bg rounded-md shadow-md'>
                        <div className='flex justify-start items-start gap-2'>
                            <h2 className='text-textDark font-semibold text-lg text-left flex-1 break-words min-w-0'>{item.q}</h2>
                            <button onClick={() => toggle(i)} className='text-textDark/80 text-left font-semibold'>
                            <i className={`fa-solid text-2xl text-secondary cursor-pointer transition ${openIndex === i ? 'fa-square-caret-up' : 'fa-square-caret-down'}`}></i>
                            </button>
                            </div>                         
                        
                        {openIndex === i && (
                            <p className='text-textDark/80 text-left leading-relaxed mt-4 text-normal'>
                                {item.a}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Faq;