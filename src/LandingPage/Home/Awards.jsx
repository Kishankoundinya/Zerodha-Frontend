import React from 'react'
import secoendimg from '../../assets/Images/Secoendimg.svg'

const Awards = () => {
  return (
    <div className='relative bg-gradient-to-b from-[#00001b] via-[#01012b] to-[#00001b] overflow-hidden'>
     
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className='relative z-10 flex flex-col md:flex-row mt-16 justify-center items-center gap-12 px-6 md:px-12 lg:px-20'>
        
        <div className='w-full md:w-[50%] flex justify-center items-center'>
          <img 
            src={secoendimg} 
            alt="" 
            className='w-[85%] sm:w-[75%] md:w-full max-w-md lg:max-w-lg drop-shadow-2xl transition-transform duration-300 hover:scale-105'
          />
        </div>

        <div className='w-full md:w-[50%] flex flex-col p-6 md:p-12 lg:p-16 justify-start text-center md:text-left bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20'>
          
          <div className='mb-6 md:mb-10'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Analyze Deep. Trade Smarter.
            </h1>
          </div>

          <div className='flex flex-col sm:flex-row gap-6'>
            
            <ul className='w-full sm:w-[50%] space-y-4'>
              <li className='flex items-center text-sm sm:text-base text-gray-200 hover:text-white transition-colors duration-200 group'>
                <div className='m-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-200'></div>
                Real-Time Insights
              </li>
              <li className='flex items-center text-sm sm:text-base text-gray-200 hover:text-white transition-colors duration-200 group'>
                <div className='m-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-200'></div>
                Advanced Charts
              </li>
              <li className='flex items-center text-sm sm:text-base text-gray-200 hover:text-white transition-colors duration-200 group'>
                <div className='m-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-200'></div>
                Smart Predictions
              </li>
            </ul>

            <ul className='w-full sm:w-[50%] space-y-4'>
              <li className='flex items-center text-sm sm:text-base text-gray-200 hover:text-white transition-colors duration-200 group'>
                <div className='m-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-200'></div>
                Instant Analysis
              </li>
              <li className='flex items-center text-sm sm:text-base text-gray-200 hover:text-white transition-colors duration-200 group'>
                <div className='m-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-200'></div>
                Risk Management
              </li>
              <li className='flex items-center text-sm sm:text-base text-gray-200 hover:text-white transition-colors duration-200 group'>
                <div className='m-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-200'></div>
                Global Markets
              </li>
            </ul>

          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Awards