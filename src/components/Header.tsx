import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="top-0 sticky z-50 flex flex-col bg-bg text-textDark">
      
      <div className="flex items-center justify-between px-6 py-4">
        <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 font-bold">
             {['about', 'features', 'testimonials', 'pricing', 'FAQ', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="text-textDark font-semibold text-center hover:text-hover hover:underline transition"
            >
              {/* {item.charAt(0).toUpperCase() + item.slice(1)} */}
              {item.toUpperCase()}
            </a>
          ))}
          {/* <a href="#about" className='text-textDark font-semibold hover:text-hover hover:underline transition'>About</a>
          <a href="#features" className='text-textDark font-semibold hover:text-hover hover:underline transition'>Features</a>
          <a href="#testimonials" className='text-textDark font-semibold hover:text-hover hover:underline transition'>Testimonials</a>
          <a href="#pricing" className='text-textDark font-semibold hover:text-hover hover:underline transition'>Pricing</a>
          <a href="#faq" className='text-textDark font-semibold hover:text-hover hover:underline transition'>FAQ</a>
          <a href="#contact" className='text-textDark font-semibold hover:text-hover hover:underline transition'>Contact</a> */}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-textDark hover:text-hover active:text-hover focus:outline-none cursor-pointer"
          >
            <i className={`fa-solid text-2xl ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Always Rendered */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform
        ${menuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col bg-cards border-t border-textDark/20 rounded-b-md shadow-md">
          {['about', 'features', 'testimonials', 'pricing', 'FAQ', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="border-b border-textDark/20 last:border-b-0 px-6 py-3 text-textDark font-semibold text-center hover:text-hover hover:underline transition"
            >
              {/* {item.charAt(0).toUpperCase() + item.slice(1)} */}
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
