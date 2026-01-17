import React from 'react'
import largestBroker from '../../assets/Images/largestBroker.svg'
import pressLogos from '../../assets/Images/pressLogos.png'

const Awards = () => {
  return (
    <div className='flex mt-10 justify-center items-center '>
      <div className='w-[50%] flex justify-center items-center'>
        <img src={largestBroker} alt="" />
      </div>
      <div className='w-[50%] flex flex-col p-20 justify-start '>
        <div className='mb-10'>
          <h1 className='text-4xl bold mb-5'>Largest stock broker in India</h1>
          <p>2+ million Zerodha clients contriubute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
        </div>
        <div className='flex'>
          <ul className='w-[50%] '>

            <li className='flex   items-center'><div className='m-2  border-3 w-1 h-1 rounded-full'></div> Futures & Options</li>
            <li className='flex   items-center'><div className='m-2  border-3 w-1 h-1 rounded-full'></div>Comodity derivatives</li>
            <li className='flex   items-center'><div className='m-2  border-3 w-1 h-1 rounded-full'></div>Currency derivatives</li>

          </ul>
          <ul className='w-[50%]'>
            <li className='flex   items-center'><div className='m-2  border-3 w-1 h-1 rounded-full'></div>Stocks & IPOs</li>
            <li className='flex   items-center'><div className='m-2  border-3 w-1 h-1 rounded-full'></div>Direct mutual funds</li>
            <li className='flex   items-center'><div className='m-2  border-3 w-1 h-1 rounded-full'></div>Bonds and Govt</li>
          </ul>
        </div>
        <div className='mt-5'>
          <img src={pressLogos} className='w-[80%]' alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Awards