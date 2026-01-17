import React from 'react'

import { MdSearch } from "react-icons/md";


const Hero = () => {
  return (
    <div className='bg-gray-100'>
        <div className='flex justify-between p-10 pl-30 pr-30'>
            <h1 className='text-3xl text-bold'>Support Portal</h1>
            <a className='bg-blue-400 text-white w-30 h-10 rounded-sm flex justify-center items-center' href="">My tickets</a>
        </div>
        <div className='flex justify-center items-center p-3 pb-15 pl-30 pr-30'>
            <div className='shadow-gray-200 bg-white w-full rounded-sm h-15 flex items-center  p-1'>
                <MdSearch size={40}/>
                <input className='p-2 ' type="text"  placeholder="Enter your name here..." />
            </div>
            
        </div>
    </div>
  )
}

export default Hero