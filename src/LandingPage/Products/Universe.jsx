import React from 'react'
import ZerodhaFund from '../../assets/Images/zerodhaFundhouse.png'
import sensiBull from '../../assets/Images/sensibulllogo.svg'
import streak from '../../assets/Images/streaklogo.png'
import smallcase from '../../assets/Images/smallcaseLogo.png'
import goldenpi from '../../assets/Images/goldenpiLogo.png'
import ditto from '../../assets/Images/dittoLogo.png'
import { useNavigate } from 'react-router-dom'



const Universe = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL 
  const navigate = useNavigate()
    return (
        <div>
            <div className='flex justify-center items-center p-30'>
                <p className='text-xl'>Want to know more about our technology stack? Check out the <a className='text-blue-500' href="">Zerodha.tech </a>blog .</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl mb-5'>The Zerodha Universe</h1>
                <p className='font-light mb-10'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='flex flex-wrap p-30  justify-center items-center'>
                    <div className='w-80 text-center mb-10 ml-3'>
                        <a  className='flex-col flex justify-center items-center' href="">
                            <img className='w-50 mb-3' src={ZerodhaFund} alt="" />
                            <p className='text-xs text-gray-400 '>Asset management</p>
                        </a>
                    </div>
                     <div className='w-80 text-center mb-10 ml-3'>
                        <a  className='flex-col flex justify-center items-center' href="">
                            <img className='w-50 mb-3' src={sensiBull} alt="" />
                            <p className='text-xs text-gray-400 '>Options trading platform</p>
                        </a>
                    </div>
                     <div className='w-80 text-center mb-10 ml-3'>
                        <a  className='flex-col flex justify-center items-center' href="">
                            <img className='w-50 mb-3' src={streak} alt="" />
                            <p className='text-xs text-gray-400 '>Algo & strategy platform
                            </p>
                        </a>
                    </div>
                     <div className='w-80 text-center mb-10 ml-3'>
                        <a  className='flex-col flex justify-center items-center' href="">
                            <img className='w-50 mb-3' src={smallcase} alt="" />
                            <p className='text-xs text-gray-400 '>Thematic investment platform
                            </p>
                        </a>
                    </div>
                     <div className='w-80 text-center mb-10 ml-3'>
                        <a  className='flex-col flex justify-center items-center' href="">
                            <img className='w-50 mb-3' src={goldenpi} alt="" />
                            <p className='text-xs text-gray-400 '>Bonds trading platform
                            </p>
                        </a>
                    </div>
                    <div className='w-80 text-center mb-10 ml-3'>
                        <a  className='flex-col flex justify-center items-center' href="">
                            <img className='w-50 mb-3' src={ditto} alt="" />
                            <p className='text-xs text-gray-400 '>Insurance</p>
                        </a>
                    </div>
                    

                </div>
                <button onClick={()=>navigate(dashboardUrl)} className='bg-blue-500 text-white rounded-sm p-3 w-50'>Sign up for free</button>
            </div>
        </div>
    )
}

export default Universe