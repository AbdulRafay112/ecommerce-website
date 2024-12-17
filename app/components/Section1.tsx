import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <>
    <div className='max-h-[900px] flex md:flex-row lg:flex-row flex-col-reverse items-center justify-end md:justify-center '>
        <div className=' flex  flex-col  md:max-w-[440px] max-h-[276px] md:ml-[202px] mx-auto'>
            <div className='md:text-[64px] text-[40px] font-medium text-center'>Rocket single seater</div>
            <button className='underline max-w-[121px] max-h-[49px] text-[24px] font-medium mx-auto mt-[30px] md:mt-0 md:mb-0 mb-6'>Shop Now</button>
        </div>
        <div ><Image src={'/sofa.png'} alt='image' width={853} height={1000} className='transform scale-x-[-1]  '></Image></div>

    </div>
    </>
  )
}

export default Section1
