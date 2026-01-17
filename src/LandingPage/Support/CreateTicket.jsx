import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faO } from '@fortawesome/free-solid-svg-icons';




const CreateTicket = () => {
  return (
    <div>
        <h1 className='p-10 pl-40 text-3xl'>To create ticket,  select a relevent topic</h1>
        <div className='flex flex-wrap justify-between pl-30 pb-30 pr-30'> 
           <div className='w-[30%] p-10'>
            <div className='mb-6 '>
                 <h1><FontAwesomeIcon icon={faCircle} />Account Opening</h1>
            </div>
            <ul>
            <li className='text-blue-500 mb-2'>Resident individual</li>
            <li className='text-blue-500 mb-2'>Minor</li>
            <li className='text-blue-500 mb-2'>Non Resident Indian (NRI)</li>
            <li className='text-blue-500 mb-2'>Company, Partnership, HUF and LLP</li>
            <li className='text-blue-500 mb-2'>Glossary</li>
            </ul>
            
           </div>
           <div className='w-[30%] p-10'>
            <div className='mb-6 '>
                 <h1><FontAwesomeIcon icon={faUser} /> Your Zerodha Account</h1>
            </div>
            <ul>
            <li className='text-blue-500 mb-2'>Your Profile</li>
            <li className='text-blue-500 mb-2'>Account Modification </li>
            <li className='text-blue-500 mb-2'>Client Master Report (CMR) and Depository Participant (DP).</li>
            <li className='text-blue-500 mb-2'>Nomination</li>
            <li className='text-blue-500 mb-2'>Transfer and conversion of securities</li>
            </ul>
            
           </div>
           <div className='w-[30%] p-10'>
            <div className='mb-6 '>
                 <h1><FontAwesomeIcon icon={faChartColumn} /> Kite</h1>
            </div>
            <ul>
            <li className='text-blue-500 mb-2'>IPO</li>
            <li className='text-blue-500 mb-2'>Trading FAQs.</li>
            <li className='text-blue-500 mb-2'>Margin Trading Facility (MTF) and Margins</li>
            <li className='text-blue-500 mb-2'>Charts and orders</li>
            <li className='text-blue-500 mb-2'>Alerts and Nudges</li>
            <li className='text-blue-500 mb-2'>General</li>
            </ul>
            
           </div>
            <div className='w-[30%] p-10'>
            <div className='mb-6 '>
                 <h1><FontAwesomeIcon icon={faCreditCard} /> Funds</h1>
            </div>
            <ul>
            <li className='text-blue-500 mb-2'>Add money</li>
            <li className='text-blue-500 mb-2'>Withdraw money</li>
            <li className='text-blue-500 mb-2'>Add bank accounts</li>
            <li className='text-blue-500 mb-2'>eMandates</li>
            </ul>
            
           </div>
           
             <div className='w-[30%] p-10'>
            <div className='mb-6 '>
                 <h1><FontAwesomeIcon icon={faCircleNotch} /> Console</h1>
            </div>
            <ul>
            <li className='text-blue-500 mb-2'>Portfolio</li>
            <li className='text-blue-500 mb-2'>Corporate actions</li>
            <li className='text-blue-500 mb-2'>Funds statement</li>
            <li className='text-blue-500 mb-2'>Reports</li>
            <li className='text-blue-500 mb-2'>Profile</li>
            <li className='text-blue-500 mb-2'>Segments</li>
            </ul>
            
           </div>
            <div className='w-[30%] p-10'>
            <div className='mb-6 '>
                 <h1><FontAwesomeIcon icon={faO} /> Coin</h1>
            </div>
            <ul>
            <li className='text-blue-500 mb-2'>Mutual funds</li>
            <li className='text-blue-500 mb-2'>National Pension Scheme (NPS)</li>
            <li className='text-blue-500 mb-2'>Features on Coin</li>
            <li className='text-blue-500 mb-2'>Payments and Orders</li>
            <li className='text-blue-500 mb-2'>General</li>
            </ul>
            
           </div>

        </div>
    </div>
  )
}

export default CreateTicket