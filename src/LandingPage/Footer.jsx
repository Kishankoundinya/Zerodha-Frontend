import React from 'react';
import logo from '../assets/Images/logo.svg';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-gradient-to-b from-[#00001b] to-[#00001b] mt-12 text-white'>
      
      <div className='border-t border-white/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl'>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12'>
            
            <div className='space-y-4 sm:space-y-5 text-center sm:text-left'>
              <div className='flex justify-center sm:justify-start'>
                <img 
                  className='w-32 sm:w-36 md:w-40 lg:w-44 hover:scale-105 transition-transform duration-300 cursor-pointer' 
                  src={logo} 
                  alt="Tradex Logo" 
                />
              </div>
              
              <p className='text-gray-400 text-xs sm:text-sm leading-relaxed px-4 sm:px-0'>
                Trade smarter with Tradex. Experience fast, secure and powerful trading tools designed for modern investors.
              </p>

              <div>
                <p className='text-gray-300 text-xs sm:text-sm font-medium mb-2 sm:mb-3 tracking-wide'>
                  Follow us
                </p>
                <div className='flex gap-2 sm:gap-3 justify-center sm:justify-start'>
                  {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram].map((Icon, index) => (
                    <div 
                      key={index} 
                      className='bg-white/5 p-1.5 sm:p-2 rounded-full hover:bg-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer group'
                    >
                      <Icon className='text-gray-400 group-hover:text-white text-xs sm:text-sm' />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='space-y-3 sm:space-y-4 text-center sm:text-left'>
              <div className='flex justify-center sm:justify-start'>
                <h2 className='text-base sm:text-lg font-semibold tracking-wide relative inline-block'>
                  About Us
                  <span className='absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full hidden sm:block'></span>
                </h2>
              </div>
              <p className='text-gray-400 text-xs sm:text-sm leading-relaxed px-4 sm:px-0'>
                Trusted by millions of users, Tradex is one of India's growing platforms for trading and investing. 
                We offer advanced tools like real-time data, smart analytics, and seamless execution to help you 
                navigate markets with confidence.
              </p>
              <div className='flex justify-center sm:justify-start'>
                <button className='text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all group'>
                  Learn More 
                  <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform' />
                </button>
              </div>
            </div>

            <div className='space-y-3 sm:space-y-4 text-center sm:text-left'>
              <div className='flex justify-center sm:justify-start'>
                <h2 className='text-base sm:text-lg font-semibold tracking-wide relative inline-block'>
                  Customer Support
                  <span className='absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full hidden sm:block'></span>
                </h2>
              </div>
              <ul className='space-y-2 sm:space-y-2.5'>
                {['Help Center', 'Contact Us', 'FAQs', 'Account Support', 'Report an Issue'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className='text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:pl-2 inline-block'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-3 sm:space-y-4 text-center sm:text-left'>
              <div className='flex justify-center sm:justify-start'>
                <h2 className='text-base sm:text-lg font-semibold tracking-wide relative inline-block'>
                  Resources
                  <span className='absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full hidden sm:block'></span>
                </h2>
              </div>
              <ul className='space-y-2 sm:space-y-2.5'>
                {['Blog', 'Market News', 'Learn Trading', 'Terms & Conditions', 'Privacy Policy'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className='text-gray-400 hover:text-white text-xs sm:text-sm transition-all duration-300 hover:pl-2 inline-block'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </div>

      
    </footer>
  );
};

export default Footer;