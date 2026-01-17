import React from 'react'
import pricingZero from '../../assets/Images/pricing0.svg'
import twenty from  '../../assets/Images/intradayTrades.svg'

const Hero = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center p-20'>
            <h1 className='text-3xl mb-5'>Charges</h1>
        <p className='text-xl text-gray-400'>List of all charges and taxes</p>

        </div>
        <div className='flex flex-wrap justify-center items-center mb-10'>
            <div className='w-[30%] p-10 text-center flex flex-col justify-center items-center'>
                <img className='h-50' src={pricingZero} alt="" />
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

            </div>
            <div className='w-[30%] p-10 text-center flex flex-col justify-center items-center'>
                <img className='h-50' src={twenty} alt="" />
                <h2>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

            </div>
            <div className='w-[30%] p-10 text-center flex flex-col justify-center items-center'>
                <img className='h-50' src={pricingZero} alt="" />
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

            </div>
            
        </div>
        
    </div>
  )
}

export default Hero