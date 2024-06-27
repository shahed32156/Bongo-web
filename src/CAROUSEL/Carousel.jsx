import React from 'react'


export default function Carousel() {
 
  var photos = ["./Images/jin.webp", "./Images/spider.webp", "./Images/alien.webp",
                 "./Images/c-4.webp", "./Images/c-5.webp", "./Images/c-6.webp",
                 "./Images/c-7.webp", "./Images/c-8.webp"];

  var imgTag=document.getElementById("c");

  var count=0;

  const next = () => {

    count++;

    if (count >= photos.length) {
  
      count=0;
      
      imgTag.src=photos[count];
  }
  
  else {
  
    imgTag.src=photos[count];
  }

  }

  const prev = () => {

    count--;

    if (count < photos.length) {
  
      count=photos.length-1;
      imgTag.src=photos[count];
  }
  
  else {
   
    imgTag.src=photos[count];
   
  }
  }
  

  return (
    <div>

     
      <img src="./Images/jin.webp" id='c' className='w-full h-[full]' alt=""/>
    

    
    <div className='container mx-auto flex justify-between relative mb-14'>

    <button onClick={prev} className='text-white absolute bottom-[70px] md:bottom-[260px]'><img src="./Images/l_arrow.svg" alt="" className='h-[20px] w-[30px] md:h-full md:w-full' /></button>
    <button onClick={next} className='text-white absolute bottom-[70px] md:bottom-[260px] right-4'><img src="./Images/g_arrow.svg" className='h-[20px] w-[30px] md:h-full md:w-full' alt="" /></button>
    
        
      
    </div> 
 
    </div>
  )
}
