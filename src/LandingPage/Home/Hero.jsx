import React from 'react'
import HomeHero from '../../assets/Images/homeHero.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL 
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex flex-col items-center'>
        <img className='mb-5'  src={HomeHero} alt="" />
        <h1 className='text-4xl'>Invest in everything</h1>
        <p className='text-gray-500 mt-2'>Online platforms to invest in stocks, derivatives, mutual funds,and more</p>
        <button onClick={()=>navigate(dashboardUrl)} className='bg-blue-500 p-2 rounded-md mt-2 text-white '>Signup Now!</button>
      </div>
    </div>
  )
}

export default Hero