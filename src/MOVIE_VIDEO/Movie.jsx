import React from 'react'


export default function Movie(props) {

 const {titleText, typeText, btn1Text, desText, btn2Text, bn3Text}=props;
 
  return (
    <div>

          <div className='container mx-auto flex flex-col md:flex-row gap-10 justify-between items-center py-6'>

            <div>

              <iframe autoPlay loop className='rounded-[12px] md:h-[450px] md:w-[750px]' src="https://www.youtube.com/embed/VuVDOXeA7zE?si=OIDC5kBFoDZaSbBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           
          </div>

          <div className='px-4 md:px-0 md:flex-col justify-center'>

            <h1 className='text-white text-5xl'>{titleText}</h1>
            <p className='text-gray-500 text-[18px] py-4'>{typeText}</p>
            <button className='bg-red-600 py-1 px-6 text-white font-semibold rounded-md'>{btn1Text}</button>
            <p className='text-gray-500 text-[18px] py-4 text-justify'>{desText}
            </p>
            

            <div className='flex gap-4 items-center'>
            <button className='bg-red-600 py-1 px-6 text-white font-semibold rounded-md'>{btn2Text}</button>
            <button className='bg-transparent py-1 px-6 text-red-500 font-semibold rounded-md hover:bg-gray-900'>{bn3Text}</button>
            
             
            </div>
          </div>
          
          </div>

    </div>
  )
}
