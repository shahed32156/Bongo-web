import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Login() {

  return (

    <div className=''>
        
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

  <h1 className="text-white text-[33px] text-center">Login</h1>

</div>

<div className="mt-6 mb-4 mx-12 tex-justify">

  <a href="https://www.facebook.com/" target="_blank"><button className="bg-blue-500 text-white mx-auto flex justify-center gap-20 items-center font-semibold w-full h-[45px] rounded-[4px]"><FaFacebook className='text-[25px]' /> Continue With Facebook</button></a>

</div>

<div className="mt-6 mb-4 mx-12">
  
 <Link to="/phone"><button style={{background:'#2D2E31'}} className="text-white mx-auto flex justify-center gap-10 items-center font-semibold w-full h-[45px] rounded-[4px]"><FaPhoneAlt className='text-[22px]' /> Continue With Phone Number</button></Link> 

</div>


<div>

  <p className="text-white text-center">Do not have an account?</p>

</div>

<div className="mt-3 mb-12">

  <Link to="/signup"><p className="text-red-600 text-center">Sign Up</p></Link>  

</div>

<div className="">

  <p className=" text-gray-300 text-center text-[13px] px-14">This site is protected by reCAPTCHA and the Google <a href="#" className="text-white hover:text-red-600 font-semibold">Privacy Policy</a> and <a href="#" className="text-white hover:text-red-600 font-semibold">Terms of Service </a> apply.</p>  

</div>


</div>
    
    </div>

  )
}
