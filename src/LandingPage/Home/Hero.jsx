import React from 'react'
import HomeHero from '../../assets/Images/homeHero.png'
import { useNavigate } from 'react-router-dom'
import HeroImg from '../../assets/Images/HeroImg.svg'

const Hero = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex items-center'>
        <div className='w-[50%] p-20'>
          <h1 className='text-4xl'>Invest in everything</h1>
          <p className='text-gray-500 mt-2'>Online platforms to invest in stocks, derivatives, mutual funds,and more</p>
          <button onClick={() => navigate(dashboardUrl)} className='bg-blue-500 p-2 rounded-md mt-2 text-white '>Signup Now!</button>

        </div>
        <div className='w-[50%] flex justify-center items-center'>
          <img src={HeroImg} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero