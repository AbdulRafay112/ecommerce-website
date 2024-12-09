import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='w-[1440px] h-[555px] bg-white flex items-center justify-center '>
        <div className='w-[1240.01px] h-[419px]'>
            <div className='w-[1131px] h-[312px] flex gap-[120px]'>
                <div>
            <div className='w-[285px] h-[72px] font-normal text-[16px] text-[#9F9F9F]  mt-[100px]' >400 University Drive Suite 200 Coral Gables,</div>
            <div>FL 33134 USA</div>
            </div>
            <div className='flex flex-col gap-[48px]'>
                <li className='list-none text-[16px] font-medium text-[#9F9F9F]'>links</li>
                <li className='list-none text-[16px] font-medium '>Home</li>
                <li className='list-none text-[16px] font-medium '>Shop</li>
                <li className='list-none text-[16px] font-medium '>About</li>
                <li className='list-none text-[16px] font-medium '>contact</li>
            </div>
            <div className='flex flex-col gap-[35px]'>
                <li className='list-none text-[16px] font-medium text-[#9F9F9F]'>Help</li>
                <li className='list-none text-[16px] font-medium '>Payment Options</li>
                <li className='list-none text-[16px] font-medium '>Returns</li>
                <li className='list-none text-[16px] font-medium '>Privacy Policies</li>
            </div>
            <div className='flex flex-col gap-[48px]'>
                <div className='list-none text-[16px] font-medium text-[#9F9F9F]'>Newsletter</div>
                <div className='flex items-center gap-3'>
                <input type="email" placeholder='Enter Your Email Address' className='border-none text-[#9F9F9F] underline'/>
                <span className='underline text-black'>SUBSCRIBE</span>
                </div>
                
            </div>
            </div>
            <div className='w-[1240.01px] border-[1px] border-black mt-[40px]'></div>
            <div className='w-[306px] text-[16px] mt-[30px]'>2022 Meubel House. All rights reverved</div>

        </div>

    </footer>
    </>
  )
}

export default Footer
