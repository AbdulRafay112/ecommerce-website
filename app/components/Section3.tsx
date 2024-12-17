import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
    <>
    <div className='max-h-[777px] flex flex-col justify-center items-center px-14 py-11 gap-4'>
        <div className='max-w-[311px] max-h-[54px] font-medium md:text-[36px] text-[26px]'>Top Picks For You</div>
        <div className='md:text-[16px] text-[12px] font-medium max-w-[773px] max-h-[24px]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>
        <div className="card-container flex items-center justify-center flex-wrap lg:flex-nowrap md:gap-3 gap-5 ">
            <div className="cart1">
                <div><Image src={'/cart1.png'} alt='image' width={300} height={200}  className='md:w-[300px] md:h-[200px] w-[100px] h-[70px]'></Image></div>
                <div className='text-[16px] font-normal'>Trenton modular sofa_3</div>
                <div className='md:text-[24px] text-[18px] font-medium'>Rs. 25,000.00</div>
            </div>
            <div className="cart2">
                <div><Image src={'/cart2.png'} alt='image' width={300} height={200} className='md:w-[300px] md:h-[200px] w-[100px] h-[70px]'></Image></div>
                <div className='text-[16px] font-normal max-w-[212px]'>Granite dining table with dining chair</div>
                <div className='md:text-[24px] text-[18px] font-medium'>Rs. 25,000.00</div>
            </div>
            <div className="cart3">
                <div><Image src={'/cart3.png'} alt='image' width={300} height={200} className='md:w-[300px] md:h-[200px] w-[100px] h-[70px]'></Image></div>
                <div className='text-[16px] font-normal max-w-[212px]'>Outdoor bar table and stool</div>
                <div className='md:text-[24px] text-[18px] font-medium'>Rs. 25,000.00</div>
            </div>
            <div className="cart4">
                <div><Image src={'/cart4.png'} alt='image' width={300} height={200} className='md:w-[300px] md:h-[200px] w-[100px] h-[70px]'></Image></div>
                <div className='text-[16px] font-normal max-w-[199px]'>Plain console with teak mirror</div>
                <div className='md:text-[24px] text-[18px] font-medium'>Rs. 25,000.00</div>
            </div>
        </div>
        <button className='max-w-[115px] text-[20px] font-medium md:mt-11 mt-5'>View More</button>
    </div>
    </>
  )
}

export default Section3
