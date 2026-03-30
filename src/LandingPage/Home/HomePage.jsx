import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Navbar from '../Navbar'
import Footer from '../Footer'
import videoSrc from '../../assets/video/bgvideo.mp4'

const HomePage = () => {
  return (
    <div className='bg-[#00001b] text-white'>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
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