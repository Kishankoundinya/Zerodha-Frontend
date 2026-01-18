import React from 'react'
import googlePlay from '../../assets/Images/googlePlayBadge.svg'
import appleStore from '../../assets/Images/appstoreBadge.svg'

const LeftSection = ({ ImgURL, productHeading, productDescription, linkOne,LinkOneName, linkTwo,LinkTwoName, playStore, appStore }) => {
    return (
        <div className='flex  w-full h-1/2 '>
            <div className='w-[60%] flex justify-center items-center'>
                <img  src={ImgURL} alt="" />
            </div>
            <div className='w-[40%] flex flex-col justify-center p-30  '>
            <div>
                <h1 className='text-3xl mb-5 text-gray-700'>{productHeading}</h1>
            </div>
                
                <p className='mb-3 text-gray-500 '>{productDescription}</p>
                <div className='mb-3'>
                    <a className='text-blue-500 pr-10' href={linkOne}>{LinkOneName}  </a><a className='text-blue-500 pr-10'href={linkTwo}>{LinkTwoName} </a>
                </div>
                <div className='flex'>
                    <div className='pr-10'>
                        <a href={playStore}><img src={googlePlay} alt="" /></a>
                    </div>
                    <div>
                        <a href={appStore}><img src={appleStore} alt="" /></a>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default LeftSection