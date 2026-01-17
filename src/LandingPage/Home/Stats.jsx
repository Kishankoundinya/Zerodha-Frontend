import React from 'react'
import ecoSystem from '../../assets/Images/ecosystem.png'

const Stats = () => {
  return (
    <div className='flex ' >
      <div className='w-[50%] flex justify-center items-center' >
        <div className=' pl-30 pr-30 '>
        <h1 className='bold text-3xl mb-5 '>Trust with confidence</h1>
        <div className='mt-5'>
          <h2 className='text-2xl bold '>Customer-first always</h2>
          <p className='text-gray-500'>That's why 1.3+ crore customers trust Zerodha with ?3.5+ lakh crores worth of equity investments.</p>
        </div>
        <div className='mt-5'>
          <h2 className='text-2xl bold '>No spam or gimmicks </h2>
          <p className='text-gray-500'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
        </div>
        <div className='mt-5'>
       <h2 className='text-2xl bold '>The Zerodha universe</h2>
          <p className='text-gray-500'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        </div>
        <div className='mt-5'>
          <h2 className='text-2xl bold '>Do better with money</h2>
          <p className='text-gray-500'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>

      </div>
      </div>
      
      <div  className='w-[50%] p-10 flex flex-col justify-center items-center'>
        <div>
        <img className='w-[80%]' src={ecoSystem} alt="" />
        </div>
        <div className='flex items-center justify-center w-full'>
          <a className=' mt-10  w-[50%] text-end mr-3 text-blue-500' href="">Explore the products →</a>
          <a className=' mt-10  w-[50%] text-start ml-3  text-blue-500' href="">Try Kite demo → </a>
        </div>

      </div>
    </div>
  )
}

export default Stats