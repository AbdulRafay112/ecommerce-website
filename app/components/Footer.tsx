// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//     <footer className='max-h-[555px]'>
//         <div className='max-w-[1240px] max-h-[419px]'>
//             <div className='grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
//                 <div>
//                 <li className='max-w-[285px] max-h-[72px] text-[16px] list-none'>400 University Drive Suite 200 Coral Gables, </li>
//                 <li className='list-none'>FL 33134 USA</li>
//                 </div>
//                 <div>
//                     <li className='text-[#9F9F9F] list-none'>Links</li>
//                     <li className='list-none'>Home</li>
//                     <li className='list-none'>Shop</li>
//                     <li className='list-none'>About</li>
//                     <li className='list-none'>Contact</li>
//                 </div>
//                 <div>
//                     <li className='text-[#9F9F9F] list-none'>Help</li>
//                     <li className='list-none'>Home</li>
//                     <li className='list-none'>Payment Options</li>
//                     <li className='list-none'>Returns</li>
//                     <li className='list-none'>Privacy Policies</li>
//                 </div>
//                 <div>
//                     <li className='text-[#9F9F9F] list-none'>Newsletter</li>
//                     <li className='flex'>
//                         <span><input type="email" placeholder='Enter Your Email Address' /></span>
//                         <button className='underline font-medium text-[16px]'>Subscribe</button>
//                     </li>
//                 </div>
//             </div>
//             <div className='border-1 border-[#D9D9D9] w-[1240px] h-2'></div>
//             <div className='max-w-[306px] max-h-[24px]'>2022 Meubel House. All rights reverved</div>
//         </div>

//     </footer>
//     </>
//   )
// }

// export default Footer


import React from 'react'  

const Footer = () => {  
  return (  
    <footer className='max-h-[555px] bg-white p-8 lg:p-12 xl:p-16'>  
      <div className='max-w-[1240px] mx-auto'>  
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>  
          <div>  
            <ul className='list-none mt-14'>  
              <li className='text-sm mb-1'>400 University Drive Suite 200 Coral Gables, </li>  
              <li className='text-sm'>FL 33134 USA</li>  
            </ul>  
          </div>  
          <div>  
            <p className='text-lg font-medium mb-2 text-[#9F9F9F]'>Links</p>  
            <ul className='list-none'>  
              <li className='text-sm mb-1'>Home</li>  
              <li className='text-sm mb-1'>Shop</li>  
              <li className='text-sm mb-1'>About</li>  
              <li className='text-sm'>Contact</li>  
            </ul>  
          </div>  
          <div>  
            <p className='text-lg font-medium mb-2 text-[#9F9F9F]'>Help</p>  
            <ul className='list-none'>  
              <li className='text-sm mb-1'>Payment Options</li>  
              <li className='text-sm mb-1'>Returns</li>  
              <li className='text-sm'>Privacy Policies</li>  
            </ul>  
          </div>  
          <div>  
            <p className='text-lg font-medium mb-2 text-[#9F9F9F]'>Newsletter</p>  
            <div className='flex flex-col md:flex-row items-start md:items-center'>  
              <input  
                type='email'  
                placeholder='Enter Your Email Address'  
                className='w-full md:w-auto underline'  
              />  
              <button className='underline font-medium text-sm'>  
                Subscribe  
              </button>  
            </div>  
          </div>  
        </div>  
        <hr className='border-1 border-[#D9D9D9] my-8' />  
        <p className='text-sm text-center md:text-left'>  
          2022 Meubel House. All rights reserved  
        </p>  
      </div>  
    </footer>  
  )  
}  

export default Footer
