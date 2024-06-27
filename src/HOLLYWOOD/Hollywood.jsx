import React from 'react'
import { FaGreaterThan } from "react-icons/fa";

export default function Hollywood() {
  return (
    <div>
      
    <div className='container mx-auto py-4'>
          

          <div className='flex gap-6 items-center px-4 md:px-0 justify-between md:justify-start'>

          <h1 className='text-white text-2xl font-Montserrat'>HOLLWOOD DUBBED</h1>
          <a href="#" className='text-white flex items-center gap-2 hover:text-red-500 justify'>SEE ALL <FaGreaterThan/></a>
          
          

         </div>

            <div className='grid grid-cols-1 md:grid-cols-7 py-4 gap-2'>

                  <div className='mx-auto'>

                      <a href="#"><img src="./Images/holly-1.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                          <a href="#"><img src="./Images/holly-2.PNG" className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                          <a href="#"><img src="./Images/holly-3.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/holly-4.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/holly-5.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/holly-6.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>

                  <div className='mx-auto'>

                            <a href="#"><img src="./Images/holly-7.PNG" alt=""  className='rounded-lg h-[300px]' /></a>

                  </div>



          </div>      


 </div>




  </div>
  )
}



