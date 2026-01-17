import React from 'react'
import education from '../../assets/Images/education.svg'

const Education = () => {
  return (
    <div className='flex  '>
        <div className='w-[50%]'>
          <img className='w-[80%] p-10' src={education} alt="" />
          
        </div>
        <div className='w-[50%] p-20'>
          <h1 className='text-3xl mb-10'>Free and open market education</h1>
          <div>
          <p className='mb-5 text-gray-500'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a className='text-blue-500 ' href="">Versity →</a>
          </div>
          <div className='mt-5'>
            <p className='mb-5 text-gray-500'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a className='text-blue-500' href="">TradingQ&A →</a>

          </div>
        </div>

      </div>
  )
}

export default Education