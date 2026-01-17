import React from 'react'


const Pricing = () => {
  return (
    
      <div className='flex'>

        <div className='w-[50%] p-20 pr-40'>
          <h1 className='text-3xl mb-10 bold'>Unbeatable Pricing</h1>
          <p className='mb-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a className='text-blue-500' href="">See Pricing →</a>
        </div>
        <div className='w-[50%] p-20 flex'>
          <div className='text-center border-[0.5px] border-gray-400 h-full w-[50%] p-10'>
            <h1 className='text-2xl bold'>₹0</h1>
            <p>Free equity delivery and direct mutual funds</p>
          </div>
          <div className='text-center border-[0.5px] border-gray-400 h-full w-[50%] p-10'>
            <h1 className='text-2xl bold'>₹20</h1>
            <p>Intraday and F&O</p>

          </div>

        </div>
      </div>
      
     
   

  )
}

export default Pricing