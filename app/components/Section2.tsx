import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <>
    <div className='max-h-[672px] bg-[#FAF4F4] flex md:flex-row flex-col items-center justify-center px-[100px] gap-8 py-5'>
        <div className='box1 max-w-[605px] max-h-[562px]'>
            <div><Image src={'/table.png'} width={1000} height={350} className='md:h-[350px] h-[100px] w-[300px] md:w-[1000px] ' alt='table-image'></Image></div>
            <div className='ml-[50px]'>
                <div className='text-[36px] font-medium'>Side table</div>
                <button className='underline font-medium mt-4'>View More</button>
            </div>

        </div>
        <div className='box2 max-w-[605px] max-h-[562px]'>
            <div><Image src={'/sofa2.png'} alt='sofa-image' width={1100} height={350} className='md:h-[350px] h-[100px] w-[300px] md:w-[1100px]'></Image></div>
            <div className='ml-[70px]'>
                <div className='text-[36px] font-medium'>Side table</div>
                <button className='underline font-medium mt-4'>View More</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Section2
