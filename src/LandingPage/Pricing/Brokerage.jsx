import React from 'react'

const Brokerage = () => {
  return (
    <div className='flex'>
        <div className='w-1/2 ml-30 p-10'>
        <div className='text-center'><h1 className='text-blue-400 text-xl mb-5'>Brokerage calculator</h1></div>
        <li className='text-gray-500 text-xs mb-2'>Call & Trade and RMS auto-squareoff: Additional charges of 850 + GST per order.</li>
        <li className='text-gray-500 text-xs mb-2'> Digital contract notes will be sent via e-mail.</li>
        <li className='text-gray-500 text-xs mb-2'> Physical copies of contract notes, if required, shall be charged 20 per contract note. Courier charges apply.</li>
        <li className='text-gray-500 text-xs mb-2'> For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower).</li>

        </div>
        <div className='w-1/2 mr-30 p-10'>
        <div className='text-center'><h1 className='text-blue-400 text-xl mb-5'>List of charges</h1></div>

        </div>
    </div>
  )
}

export default Brokerage