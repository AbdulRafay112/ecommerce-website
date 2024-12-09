import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
        <Navbar/>
        <div className="shop-section w-[1440px] h-[316px] flex flex-col items-center justify-center">
            <div className='w-[124px] h-[132px] flex flex-col justify-center items-center'>
                <div className='h-[50px]'><img src="/logo-shop.png" alt="shoplogo" /></div>
                <div className='w-[124px] text-[48px] font-medium'>Shop</div>
                <div className='flex text-[16px] gap-2'><b>Home</b> <b><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></b> Shop</div>
            </div>

        </div>
        <div className='w-[1440px] h-[100px] bg-[#FAF4F4] mt-[50px] sm:justify-center flex justify-around items-center px-[100px]'>
            <div className='flex gap-5 items-center'>
                <div><svg width="85" height="30" viewBox="0 0 85 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.42 8.06V9.54H40.36V14.24H45.28V15.72H40.36V22H38.54V8.06H46.42ZM49.5581 9.26C49.2115 9.26 48.9181 9.14 48.6781 8.9C48.4381 8.66 48.3181 8.36667 48.3181 8.02C48.3181 7.67333 48.4381 7.38 48.6781 7.14C48.9181 6.9 49.2115 6.78 49.5581 6.78C49.8915 6.78 50.1715 6.9 50.3981 7.14C50.6381 7.38 50.7581 7.67333 50.7581 8.02C50.7581 8.36667 50.6381 8.66 50.3981 8.9C50.1715 9.14 49.8915 9.26 49.5581 9.26ZM50.4381 11.04V22H48.6181V11.04H50.4381ZM55.36 7.2V22H53.54V7.2H55.36ZM60.6819 12.54V19C60.6819 19.5333 60.7952 19.9133 61.0219 20.14C61.2485 20.3533 61.6419 20.46 62.2019 20.46H63.5419V22H61.9019C60.8885 22 60.1285 21.7667 59.6219 21.3C59.1152 20.8333 58.8619 20.0667 58.8619 19V12.54H57.4419V11.04H58.8619V8.28H60.6819V11.04H63.5419V12.54H60.6819ZM75.747 16.1C75.747 16.4467 75.727 16.8133 75.687 17.2H66.927C66.9937 18.28 67.3604 19.1267 68.027 19.74C68.707 20.34 69.527 20.64 70.487 20.64C71.2737 20.64 71.927 20.46 72.447 20.1C72.9804 19.7267 73.3537 19.2333 73.567 18.62H75.527C75.2337 19.6733 74.647 20.5333 73.767 21.2C72.887 21.8533 71.7937 22.18 70.487 22.18C69.447 22.18 68.5137 21.9467 67.687 21.48C66.8737 21.0133 66.2337 20.3533 65.767 19.5C65.3004 18.6333 65.067 17.6333 65.067 16.5C65.067 15.3667 65.2937 14.3733 65.747 13.52C66.2004 12.6667 66.8337 12.0133 67.647 11.56C68.4737 11.0933 69.4204 10.86 70.487 10.86C71.527 10.86 72.447 11.0867 73.247 11.54C74.047 11.9933 74.6604 12.62 75.087 13.42C75.527 14.2067 75.747 15.1 75.747 16.1ZM73.867 15.72C73.867 15.0267 73.7137 14.4333 73.407 13.94C73.1004 13.4333 72.6804 13.0533 72.147 12.8C71.627 12.5333 71.047 12.4 70.407 12.4C69.487 12.4 68.7004 12.6933 68.047 13.28C67.407 13.8667 67.0404 14.68 66.947 15.72H73.867ZM79.9694 12.82C80.2894 12.1933 80.7427 11.7067 81.3294 11.36C81.9294 11.0133 82.656 10.84 83.5094 10.84V12.72H83.0294C80.9894 12.72 79.9694 13.8267 79.9694 16.04V22H78.1494V11.04H79.9694V12.82Z" fill="black"/>
<path d="M22.0238 9.14286H8.92858M6.54763 9.14286H2.9762M22.0238 21.0476H8.92858M6.54763 21.0476H2.9762M16.0714 15.0952H2.9762M22.0238 15.0952H18.4524M7.7381 6.76191C8.05384 6.76191 8.35664 6.88733 8.5799 7.11059C8.80315 7.33385 8.92858 7.63665 8.92858 7.95238V10.3333C8.92858 10.6491 8.80315 10.9519 8.5799 11.1751C8.35664 11.3984 8.05384 11.5238 7.7381 11.5238C7.42237 11.5238 7.11957 11.3984 6.89631 11.1751C6.67305 10.9519 6.54763 10.6491 6.54763 10.3333V7.95238C6.54763 7.63665 6.67305 7.33385 6.89631 7.11059C7.11957 6.88733 7.42237 6.76191 7.7381 6.76191V6.76191ZM7.7381 18.6667C8.05384 18.6667 8.35664 18.7921 8.5799 19.0153C8.80315 19.2386 8.92858 19.5414 8.92858 19.8571V22.2381C8.92858 22.5538 8.80315 22.8566 8.5799 23.0799C8.35664 23.3031 8.05384 23.4286 7.7381 23.4286C7.42237 23.4286 7.11957 23.3031 6.89631 23.0799C6.67305 22.8566 6.54763 22.5538 6.54763 22.2381V19.8571C6.54763 19.5414 6.67305 19.2386 6.89631 19.0153C7.11957 18.7921 7.42237 18.6667 7.7381 18.6667ZM17.2619 12.7143C17.5776 12.7143 17.8804 12.8397 18.1037 13.063C18.327 13.2862 18.4524 13.589 18.4524 13.9048V16.2857C18.4524 16.6014 18.327 16.9043 18.1037 17.1275C17.8804 17.3508 17.5776 17.4762 17.2619 17.4762C16.9462 17.4762 16.6434 17.3508 16.4201 17.1275C16.1969 16.9043 16.0714 16.6014 16.0714 16.2857V13.9048C16.0714 13.589 16.1969 13.2862 16.4201 13.063C16.6434 12.8397 16.9462 12.7143 17.2619 12.7143V12.7143Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
       <div>
       <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6666 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1415C15.5354 20.4852 15.1666 19.5949 15.1666 18.6667C15.1666 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6666 15.1667C19.5949 15.1667 20.4851 15.5354 21.1415 16.1918C21.7979 16.8482 22.1666 17.7384 22.1666 18.6667C22.1666 19.5949 21.7979 20.4852 21.1415 21.1415C20.4851 21.7979 19.5949 22.1667 18.6666 22.1667ZM9.33331 22.1667C8.40506 22.1667 7.51482 21.7979 6.85844 21.1415C6.20206 20.4852 5.83331 19.5949 5.83331 18.6667C5.83331 17.7384 6.20206 16.8482 6.85844 16.1918C7.51482 15.5354 8.40506 15.1667 9.33331 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1415C11.1518 21.7979 10.2616 22.1667 9.33331 22.1667ZM18.6666 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1666 10.2616 15.1666 9.33333C15.1666 8.40508 15.5354 7.51484 16.1918 6.85846C16.8482 6.20208 17.7384 5.83333 18.6666 5.83333C19.5949 5.83333 20.4851 6.20208 21.1415 6.85846C21.7979 7.51484 22.1666 8.40508 22.1666 9.33333C22.1666 10.2616 21.7979 11.1518 21.1415 11.8082C20.4851 12.4646 19.5949 12.8333 18.6666 12.8333ZM9.33331 12.8333C8.40506 12.8333 7.51482 12.4646 6.85844 11.8082C6.20206 11.1518 5.83331 10.2616 5.83331 9.33333C5.83331 8.40508 6.20206 7.51484 6.85844 6.85846C7.51482 6.20208 8.40506 5.83333 9.33331 5.83333C10.2616 5.83333 11.1518 6.20208 11.8082 6.85846C12.4646 7.51484 12.8333 8.40508 12.8333 9.33333C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33331 12.8333Z" fill="black"/>
</svg>

       </div>
        <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black"/>
</svg>

        </div>
        <div><svg width="2" height="37" viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="2"/>
</svg>
</div>    
       <div className='w-[203px] text-[16px]'>Showing 1–16 of 32 results</div>
            </div>
            <div className='flex gap-5 items-center px-28'>
                <div className='text-[20px]'>Show</div>
                <div className='text-[#9F9F9F] w-[55px] bg-white text-center'>16</div>
                <div className='text-[20px]'>Sort by</div>
                <div className='text-[#9F9F9F] text-[20px] w-[188px] bg-white px-2 py-2 text-center'>Default</div>
            </div>
        </div>
        <div className='product-section w-[1440px] h-[1808px]'>
            <div className='grid grid-cols-4  w-[1240px] gap-20  px-36'>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-1.png" alt="shop-image-1" /></div>
                    <div className='w-[194px] text-[16px]'>Trenton modular sofa_3</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-2.png" alt="shop-image-2" /></div>
                    <div className='w-[194px] text-[16px]'>Granite dining table with dining chair</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-3.png" alt="shop-image-3" /></div>
                    <div className='w-[194px] text-[16px]'>Outdoor bar table and stool</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-4.png" alt="shop-image-4" /></div>
                    <div className='w-[194px] text-[16px]'>Plain console with teak mirror</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-5.png" alt="shop-image-5" /></div>
                    <div className='w-[194px] text-[16px]'>Grain coffee table</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-6.png" alt="shop-image-6" /></div>
                    <div className='w-[194px] text-[16px]'>Kent coffee table</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-7.png" alt="shop-image-7" /></div>
                    <div className='w-[194px] text-[16px]'>Round coffee table_color 2</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-8.png" alt="shop-image-8" /></div>
                    <div className='w-[194px] text-[16px]'>Reclaimed teak coffee table</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-9.png" alt="shop-image-9" /></div>
                    <div className='w-[194px] text-[16px]'>Plain console_</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 25,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-10.png" alt="shop-image-10" /></div>
                    <div className='w-[194px] text-[16px]'>Reclaimed teak Sideboard</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 20,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-11.png" alt="shop-image-11" /></div>
                    <div className='w-[194px] text-[16px]'>SJP_0825</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 200,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-12.png" alt="shop-image-12" /></div>
                    <div className='w-[194px] text-[16px]'>Bella chair and table</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 100,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-13.png" alt="shop-image-13" /></div>
                    <div className='w-[194px] text-[16px]'>Granite square side table</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 258,800.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-14.png" alt="shop-image-14" /></div>
                    <div className='w-[194px] text-[16px]'>Asgaard sofa</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 250,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-15.png" alt="shop-image-15" /></div>
                    <div className='w-[194px] text-[16px]'>Maya sofa three seater</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 115,000.00</div>

                </div>
                <div className="cart w-[287px] h-[372px] flex flex-col items-center justify-center">
                    <div><img src="shop-image-16.png" alt="shop-image-16" /></div>
                    <div className='w-[194px] text-[16px]'>Outdoor sofa set</div>
                    <div className='text-[24px] font-medium w-[158px] mt-[10px]'>Rs. 244,000.00</div>

                </div>

            </div>
        </div>
        <div className='w-[1440px] h-[300px] bg-[#FAF4F4] flex items-center justify-center gap-6'>
            <div className="box w-[376px] h-[108px]">
                <div className='w-[205px] font-medium text-[32px]'>Free Delivery</div>
                <div className='w-[376px] text-[20px]'>For all oders over $50, consectetur adipim scing elit.</div>
            </div>
            <div className="box w-[376px] h-[108px]">
                <div className='w-[244px] font-medium text-[32px]'>90 Days Return</div>
                <div className='w-[376px] text-[20px]'>If goods have problems, consectetur adipim scing elit.</div>
            </div>
            <div className="box w-[376px] h-[108px]">
                <div className='w-[265px] font-medium text-[32px]'>Secure Payment</div>
                <div className='w-[300px] text-[20px] mr-[30px] px-6'>100% secure payment, consectetur adipim scing elit.</div>
            </div>
        </div>
    </>
      
    
  )
}

export default page
