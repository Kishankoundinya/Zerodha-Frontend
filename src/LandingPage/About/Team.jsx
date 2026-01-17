import React from 'react'
import ceo from '../../assets/Images/nithinKamath.jpg'

const Team = () => {
    return (
        <div>
            <div >
                <div>
                    <h1 className='text-3xl  text-center mt-5 mb-15 text-gray-500'>People</h1>
                </div>
                <div className='flex '>
                    <div className='w-[50%] flex flex-col items-center text-center'>
                        <img className='rounded-full h-70' src={ceo} alt="" />
                        <p className='mb-3 mt-5'>Nithin Kamath</p>
                        <p className='text-gray-500'>Founder, CEO</p>
                    </div>
                    <div className='w-[50%] mr-40 '>
                        <p className='mb-5 text-gray-700'>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p className='mb-5 text-gray-700'>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p className='mb-5 text-gray-700'>
                            Playing basketball is his zen.
                        </p>
                        <p className='mb-5 text-gray-700'>
                            Connect on <a className='text-blue-500' href="">Homepage</a> / <a className='text-blue-500' href="">TradingQnA</a> / <a className='text-blue-500' href="">Twitter</a>
                        </p>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Team