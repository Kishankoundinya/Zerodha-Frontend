import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpenAccount = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL 
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex flex-col items-center'>
        
        <h1 className='text-4xl'>Open a Zerodha Account</h1>
        <p className='text-gray-500 mt-2 mb-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button onClick={()=>navigate(dashboardUrl)} className='bg-blue-500 p-2 rounded-md text-white '>Sign up Now</button>
      </div>
    </div>
  )
}

export default OpenAccount