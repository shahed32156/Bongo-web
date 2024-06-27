import React from 'react'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

export default function Phone() {
  return (
    <div>

      <div className="bg-black flex items-end justify-end h-[40px] w-[450px] rounded-t-md mx-auto mt-[70px]">

<Link to="/*"><ImCross className='hover:text-red-600 text-white text-[15px]'/> </Link>

</div>


<div className="bg-black h-[600px] w-[450px] rounded-md mx-auto">



    <div>

        <img src="./Images/login.webp" alt="" className="opacity-70"/>
    </div>

    <div className="">

        <img src="./Images/bongo-logo.svg" alt="" className="h-[50px] w-[50px] mx-auto"/>
    
    </div>

    <div>

        <h1 className="text-white text-[22px] text-center">Enter your number to verify</h1>
    </div>

    <div className="mt-6 mb-3 ml-10 mr-8 flex">
         <select className="text-white focus:outline-none" style={{background:"#2D2E31"}} name="" id="">

            <option value=""><span>BD</span><span> +88</span></option>
            <option value=""><span>AU</span><span> +61</span></option>

         </select>

        <input style={{background:"#2D2E31"}} placeholder="Phone Number" required className="pl-4 text-white mx-auto flex justify-center gap-10 items-center font-semibold w-full h-[40px] focus:outline-none" type="number"/>
    
        </div>

    <div className="flex gap-4 items-center ml-[34px]">

        <input type="checkbox" className="accent-[#DA0B2A] h-[18px] w-[30px] bg-red-600" name="" id="" checked/>
        <label for="" className="text-white text-[18px]">Keep me signed in.</label>

    </div>

    <div className="mt-8 mb-1 mx-[36px]">
        
        <a href=""><button className="bg-[#DA0B2A] text-white mx-auto flex justify-center gap-10 items-center font-semibold w-full h-[45px] rounded-[4px]">Continue</button></a> 
     
     </div>

     <div className="mb-12 mx-[36px]">
        
        <Link to="/*"><button className="bg-transparent text-gray-300 mx-auto flex justify-center gap-10 items-center font-semibold w-full h-[45px] rounded-[4px]">Not Now</button></Link> 
     
     </div>

     <div className="">

        <p className="text-gray-300 text-center text-[13px] px-14">This site is protected by reCAPTCHA and the Google <a href="#" className="text-white hover:text-red-600 font-semibold">Privacy Policy</a> and <a href="#" className="text-white hover:text-red-600 font-semibold">Terms of Service </a> apply.</p>  

    </div>


</div>
    </div>
    
  )
}
