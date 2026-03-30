import React from 'react'
import ecoSystem from '../../assets/Images/ecosystem.svg'

const Stats = () => {
  return (
    <div className='relative bg-gradient-to-b from-[#00001b] via-[#01012b] to-[#00001b] min-h-screen flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 gap-12 overflow-hidden'>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className='relative z-10 w-full md:w-[50%] text-center md:text-left'>
        
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
          Everything You Need to Trade Smarter
        </h1>

        <div className='mt-8 space-y-6 max-w-lg mx-auto md:mx-0'>
          
          <div className='hover:translate-x-2 transition-transform duration-300'>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>
              Lightning-fast execution
            </h2>
            <p className='text-gray-300 mt-1 text-sm sm:text-base'>
              Execute trades instantly with high-speed performance and zero lag.
            </p>
          </div>

          <div className='hover:translate-x-2 transition-transform duration-300'>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>
              Advanced analytics dashboard
            </h2>
            <p className='text-gray-300 mt-1 text-sm sm:text-base'>
              Powerful charts and tools to help you make data-driven decisions.
            </p>
          </div>

          <div className='hover:translate-x-2 transition-transform duration-300'>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>
              Secure & reliable platform
            </h2>
            <p className='text-gray-300 mt-1 text-sm sm:text-base'>
              Built with top-grade security to protect your data and investments.
            </p>
          </div>

          <div className='hover:translate-x-2 transition-transform duration-300'>
            <h2 className='text-lg sm:text-xl font-semibold text-white'>
              Trade anytime, anywhere
            </h2>
            <p className='text-gray-300 mt-1 text-sm sm:text-base'>
              Access your account seamlessly across devices, wherever you go.
            </p>
          </div>

        </div>
      </div>
      
      <div className='relative z-10 w-full md:w-[50%] flex flex-col justify-center items-center'>
        
        <img 
          className='w-[80%] sm:w-[70%] md:w-full max-w-md lg:max-w-lg drop-shadow-2xl transition-transform duration-300 hover:scale-105'
          src={ecoSystem} 
          alt="" 
        />

      </div>
    </div>
  )
}

export default Stats