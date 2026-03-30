import React from 'react'
import logo from '../assets/Images/logo.svg'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#00001b] mt-10  text-white flex flex-col justify-center items-center'>
      <div className='flex p-20 w-full'>
        {/* 1st */}
        <div className='w-[25%] mr-10'>
          <img className='w-50' src={logo} alt="" />
          <p className='text-[15px] p-3'>© 2026 TradeX Ltd.
            All rights reserved.</p>
          <div className='flex justify-between w-[60%] p-3 text-white'>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTelegram />
          </div>



        </div>
        <div className='w-[25%] mr-10'>
          
        </div>
      
        
        
      </div>
      

    </div>
  )
}

export default Footer