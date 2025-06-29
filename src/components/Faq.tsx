import React, { useState } from 'react';

const data = [
  { q: 'Is this beginner-friendly?', a: 'Yes! Everything is tailored to your level.' },
  { q: 'Can I cancel anytime?', a: 'Yes, there’s no contract.' },
  { q: 'Do you provide a diet plan?', a: 'Yes, customized for you.' },
  { q: 'What is the cancellation policy?', a: 'We do not provide a cancellation policy. You can cancel anytime.' },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="FAQ" className="font-inter" aria-label="Frequently Asked Questions">
      <h1 className="text-center font-bold text-[clamp(1.5rem,3vw,2rem)] text-textDark m-4 p-4">FAQ</h1>
      <div className="w-fit min-w-[16rem] max-w-full mx-auto space-y-4">
        {data.map((item, i) => {
          const isOpen = openIndex === i;
          const buttonId = `faq-button-${i}`;
          const panelId = `faq-panel-${i}`;

          return (
            <div key={i} className="p-4 bg-bg rounded-md shadow-md">
              <div className="flex justify-between items-center">
                <h2
                  id={buttonId}
                  className="text-textDark font-semibold text-lg text-left flex-grow break-words min-w-0"
                     >
                    {item.q}
                </h2>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="text-textDark/80 font-semibold flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
                  >

                    <i
                      className={`fa-solid text-2xl text-secondary transition ${
                        isOpen ? 'fa-square-caret-up' : 'fa-square-caret-down'
                      }`}
                      aria-hidden="true"
                    ></i>
                  </button>
              </div>
              <div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className={`text-textDark/80 text-left leading-relaxed mt-4 text-normal overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
                ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
            >
            {item.a}
            </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
