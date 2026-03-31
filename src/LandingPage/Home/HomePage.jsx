import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Navbar from '../Navbar'
import Footer from '../Footer'
import bgGif from '../../assets/Images/bgvideo.gif'

const HomePage = () => {
  return (
    <div className='bg-[#00001b] text-white'>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bgGif}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Awards />
      <Stats />
    </div>
  )
}

export default HomePage