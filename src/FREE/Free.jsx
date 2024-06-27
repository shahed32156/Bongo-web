import React from 'react'
import { FaGreaterThan } from "react-icons/fa";

export default function Free() {
  return (
    <div>
      
    <div className='container mx-auto py-4'>
          

          <div className='flex gap-6 items-center px-4 md:px-0 justify-between md:justify-start'>

          <h1 className='text-white text-2xl font-Montserrat'>FREE FOR LIMITED TIME</h1>
          <a href="#" className='text-white flex items-center gap-2 hover:text-red-500 justify'>SEE ALL <FaGreaterThan/></a>
          
          

         </div>

            <div className='grid grid-cols-1 md:grid-cols-7 py-4 gap-2'>

                  <div className='mx-auto'>

                      <a href="#"><img src="./Images/free-1.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                          <a href="#"><img src="./Images/free-2.PNG" className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                          <a href="#"><img src="./Images/free-3.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/free-4.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/free-5.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/free-6.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/free-7.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>



          </div>      


 </div>




  </div>
  )
}



