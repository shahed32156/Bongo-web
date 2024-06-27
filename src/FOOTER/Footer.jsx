import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-900 pt-12 pb-8 mt-4'>
       
       <div className=''>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

                    <div className='mx-0 md:mx-auto flex flex-col gap-3 pl-8'>

                        
                        <div>

                        <img className='' src="./Images/bongo.png" alt="" />
                        </div>

                        <a href=""><p className='text-white text-[18px] font-light'>Who we are</p></a>
                        <a href=""><p className='text-white text-[18px] font-light'>Contact Us</p></a>

                    </div>


                    <div className='mx-0 md:mx-auto flex flex-col gap-3 pl-8'>

                        
                        <div>

                        <h1 className='text-white text-[22px] font-semibold'>BROWSE</h1>
                        </div>
                        <a href=""><p className='text-white text-[18px] font-light'>Movies</p></a>
                        <a href=""><p className='text-white text-[18px] font-light'>Shows</p></a>
                        <a href=""><p className='text-white text-[18px] font-light'>Drama</p></a>
                        <a href=""><p className='text-white text-[18px] font-light'>Boom</p></a>

                    </div>


                    <div className='mx-0 md:mx-auto flex flex-col gap-3 pl-8'>

                        
                                <div>

                                <h1 className='text-white text-[22px] font-semibold'>LEGAL</h1>
                                </div>
                                <a href=""><p className='text-white text-[18px] font-light'>Terms & Conditions</p></a>
                                <a href=""><p className='text-white text-[18px] font-light'>Open Source Agreements</p></a>
                                <a href=""><p className='text-white text-[18px] font-light'>FAQ</p></a>
                                <a href=""><p className='text-white text-[18px] font-light'>Privacy Policy</p></a>

                    </div>

                    <div className='mx-0 md:mx-auto pl-8'>

                        
                            <div>

                                <h1 className='text-white text-[22px] pb-3 font-semibold'>FOLLOW</h1>
                            </div>

                                <div className='flex gap-3'>

                                <a href=""><img className='h-[40px] w-[40px]' src="./Images/facebook.svg" alt="" /></a>
                                <a href=""><img className='h-[40px] w-[40px]' src="./Images/youtube.svg" alt="" /></a>
                                <a href=""><img className='h-[40px] w-[40px]' src="./Images/insta.svg" alt="" /></a>

                                </div>

                            <div className='mt-4 flex flex-col gap-3'>

                                <a href=""><img className='h-[50px] w-[150px]' src="./Images/g-play.webp" alt="" /></a>
                                <a href=""><img className='h-[50px] w-[150px]' src="./Images/a-store.svg" alt="" /></a>

                            </div>
                               

                    </div>


                    

                
              </div>  


       </div>

       <div className='text-center text-white font-extralight mt-14'>

        <h1>©2024 Bongo All rights reserved.</h1>
        
       </div>


    </div>
  )
}
