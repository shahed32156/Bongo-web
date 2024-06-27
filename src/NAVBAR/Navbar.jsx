import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {

  

render() {

    return (
       

      <div className='bg-black md:fixed w-full z-10'>
      
        <div className='container mx-auto text-white flex md:flex-row flex-col gap-6 justify-between items-center py-2'>

              <div className='flex md:flex-row flex-col gap-6 items-center text-left'>

                <a href="#"><img className='h-[30px] w-[90px]' src="./Images/bongo.png" alt="" /></a> 
                
                <a href="#" className='hover:text-red-500'><p>MOVIES</p></a>       
                <a href="#" className='hover:text-red-500'><p>SHOWS</p></a>     
                <a href="#" className='hover:text-red-500'><p>DRAMA</p></a>       
                <a href="#" className='hover:text-red-500'><p>SHORTS</p></a>  
                <a href="#" className='hover:text-red-500'><p>DISCOVER</p></a> 
                <a href="#" className='flex gap-1'><p className='hover:text-red-500'>COMING SOON </p><button className='bg-red-500 py-[0.5px] px-2 rounded-[8px]'>New</button></a>
                <a href="#" className='hover:text-red-500'><p>SUBSCRIBE</p></a>
                <a href="#" className='hover:text-red-500'><p>SHARK TANK</p></a>
                

               </div>

               <div className='flex md:flex-row flex-col gap-6 items-center'>


              <input type="text" onChange={this.change} class="search h-[37px] w-[0px] pl-12  bg-black rounded-[4px]" placeholder="Search here"/>
              
                    
                    
                    <select className='text-red-500 rounded-md py-2 px-4 bg-transparent hover:bg-gray-900 hover:transition hover:duration-500 hover:cursor-pointer text-center' name="" id="">
                        <option value="1" className='bangla'> BANGLA</option>
                        <option value="English">ENGLISH</option>

                    </select>
                    
                   <Link to="/login"  className='bg-red-500 py-2 px-4 rounded-md font-sans-serif'>LOGIN/REGISTER</Link>
                   
               </div>
               
               
        </div>


       
        
        
    </div>

    
    )
  }

}



