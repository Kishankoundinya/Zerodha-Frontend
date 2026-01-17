import React from 'react'

const RightSection = ({ ImgURL, productHeading, productDescription, LinkOneName,linkOne}) => {
  return (
     <div className='flex  w-full h-1/2'>
                <div className='w-[40%] flex flex-col justify-center p-30  '>
                <div>
                    <h1 className='text-3xl mb-5 text-gray-700'>{productHeading}</h1>
                </div>
                <p className='mb-3 text-gray-500 '>{productDescription}</p>
                    <div className='mb-3'>
                        <a className='text-blue-500 pr-10' href={linkOne}>{LinkOneName}  </a>
                    </div>
                </div>
                <div className='w-[60%] flex justify-center items-center'>
                    <img  src={ImgURL} alt="" />
                </div>
    
    
            </div>
  )
}

export default RightSection