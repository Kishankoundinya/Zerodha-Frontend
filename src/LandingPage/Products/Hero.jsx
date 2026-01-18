import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import consoleImg from '../../assets/Images/console.png'
import coin from '../../assets/Images/coin.png'
import kiteConnect from '../../assets/Images/kiteconnect.png'
import VarsityMobile from '../../assets/Images/varsity.svg'

import kite from '../../assets/Images/kite.png'
import Universe from './Universe'

const Hero = () => {
    
  return (
    <div>
    <div className='w-full text-center p-30'>
        <h1 className='text-3xl mb-5'>Zerodha Products</h1>
        <p className='text-xl mb-5'>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our <a className='text-blue-500' href="">investment offerings →</a></p>
        
           
       
    </div>
     <LeftSection 
     ImgURL={kite} 
     productHeading="Kite" 
     productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
     linkOne="" 
     LinkOneName="Try demo →"
     linkTwo="" 
     LinkTwoName="Learn more →"
       
     playStore="" 
     appStore="" 
     />
     <RightSection 
     ImgURL={consoleImg} 
     productHeading="Console" 
     productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
     linkOne="" 
     LinkOneName="Learn more →"
     />
     <LeftSection 
     ImgURL={coin} 
     productHeading="Coin" 
     productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
      linkOne="" 
     LinkOneName="Coin → "
     linkTwo="" 
     LinkTwoName=""
     playStore="" 
     appStore="" 
     />
     <RightSection 
     ImgURL={kiteConnect} 
     productHeading="Kite Connect API" 
     productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
     linkOne="" 
     LinkOneName="Kite Connect → " 
     />
     <LeftSection 
     ImgURL={VarsityMobile} 
     productHeading="Varsity mobile" 
     productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
      linkOne="" 
     LinkOneName=""
     linkTwo="" 
     LinkTwoName="" 
     playStore="" 
     appStore="" 
     />
     <Universe/>
     </div>
    
  )
}

export default Hero