import React from 'react'
import Image from 'next/image'

const Section4 = () => {
  return (
    <>
    <div className='max-h-[639px] bg-[#FFF9E5] flex md:flex-row flex-col items-center justify-center md:justify-between px-7'>
        <div><Image src={'/sofa3.png'} alt='image' width={300} height={300} className='md:w-[800px] md:h-[700px]'></Image></div>
        <div className='max-w-[331px] flex flex-col gap-3'>
            <div className='text-[24px] font-medium text-center'>New Arrivals</div>
            <div className='md:text-[48px] text-[36px] font-bold'>Asgaard sofa</div>
            <button className='max-w-[255px] md:min-h-[64px] border-[1px] border-black text-[20px] mb-3'>Order Now</button>

        </div>

    </div>
    </>
  )
}

export default Section4
