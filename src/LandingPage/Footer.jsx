import React from 'react'
import logo from '../assets/Images/logo.svg'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-100 mt-10 border-t-[0.5px] border-gray-300 flex flex-col justify-center items-center'>
      <div className='flex p-20 w-full'>
        {/* 1st */}
        <div className='w-[25%] mr-10'>
          <img className='w-50' src={logo} alt="" />
          <p className='text-[15px]'>© 2010 - 2024, Not Zerodha Broking Ltd.
            All rights reserved.</p>
          <div className='flex justify-between w-[60%] p-2 text-gray-500'>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTelegram />
          </div>



        </div>
        {/* 2nd */}
        <div className='w-[25%]'>
          <h3 className='font-bold text-gray-700'>Company</h3>
          <a className='text-gray-500'>About</a>
          <br />
          <a className='text-gray-500'>Products</a>
          <br />
          <a className='text-gray-500'>Pricing</a>
          <br />
          <a className='text-gray-500'>Referral programme</a>
          <br />
          <a className='text-gray-500'>Careers</a>
          <br />
          <a className='text-gray-500'>Zerodha.tech</a>
          <br />
          <a className='text-gray-500'>Press & media</a>
          <br />
          <a className='text-gray-500'>Zerodha cares (CSR)</a>

        </div>
        {/* 3rd */}
        <div className='w-[25%]'>
          <h3 className='font-bold text-gray-700'>Support</h3>
          <a className='text-gray-500'>Contact</a>
          <br />
          <a className='text-gray-500'>Support portal</a>
          <br />
          <a className='text-gray-500'>Z-Connect blog</a>
          <br />
          <a className='text-gray-500'>List of charges</a>
          <br />
          <a className='text-gray-500'>Downloads & resources</a>

        </div>
        {/* 4th */}
        <div className='w-[25%]'>
          <h3 className='font-bold text-gray-700'>Account</h3>
          <a className='text-gray-500'>Open an account</a>
          <br />
          <a className='text-gray-500'>Fund transfer</a>
          <br />
          <a className='text-gray-500'>60 day challenge</a>
        </div>
      </div>
      <div className='pl-20 pr-20 pb-2'>
        <p className='text-xs  text-gray-400 mb-5'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p className='text-xs text-gray-400 mb-5'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p className='text-xs text-gray-400 '>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p className='text-xs text-gray-400 mb-5'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p className='text-xs text-gray-400 mb-5'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p className='text-xs text-gray-400 '>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        <p className='text-xs text-gray-400 '>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
      </div>
      <div className='flex justify-between ml-20 mr-20 mb-10 mt-5 w-[70%]'>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">NSE</a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">BSE</a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">MCX</a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">Terms & Conditions</a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">Policies & Procedure</a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">Privacy policy</a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">Disclosure</a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">For investor's attention </a>
        <a className='text-xs text-gray-400 hover:text-blue-500' href="">Investor charter</a>
      </div>

    </div>
  )
}

export default Footer