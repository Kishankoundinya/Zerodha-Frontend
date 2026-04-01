import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroImg from '../../assets/Images/HeroImg.gif'
import bgGif from '../../assets/Images/Newvideobg.gif'

const Hero = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL
  const navigate = useNavigate()
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgGif}
          alt="Background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      
      <div className='relative z-10 flex flex-col-reverse md:flex-row items-center min-h-screen px-6 md:px-12 lg:px-20 gap-10'>
        <div className='w-full md:w-[50%] text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-white'>
            Powering Your Trades. Elevating Your Growth.
          </h1>
          
          <p className='text-gray-200 mt-4 text-sm sm:text-base lg:text-lg max-w-md mx-auto md:mx-0'>
            All-in-one trading platform designed for beginners and pros alike.
          </p>
          
          <button 
            onClick={() => navigate(dashboardUrl)} 
            className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-lg mt-6 text-white text-sm sm:text-base shadow-md hover:shadow-lg'
          >
            Signup Now!
          </button>
        </div>

        <div className='w-full md:w-[50%] flex justify-center items-center'>
          <img 
            src={HeroImg} 
            alt="Hero illustration" 
            className='w-[80%] sm:w-[70%] md:w-full max-w-md lg:max-w-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero