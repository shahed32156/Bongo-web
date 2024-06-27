
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Best from './BEST_AND_LATEST/Best'
import Bng from './BNG/Bng'
import Carousel from './CAROUSEL/Carousel'
import EidSpecial from './EID_SPECIAL/EidSpecial'
import Entertainment from './ENTERTAINMENT/Entertainment'
import Entertainment2 from './ENTERTAINMENT2/Entertainment2'
import Footer from './FOOTER/Footer'
import Free from './FREE/Free'
import Hollywood from './HOLLYWOOD/Hollywood'
import Login from './LOGIN/Login'
import Love from './LOVE/Love'
import MovieMap from './MOVIE_VIDEO/MovieMap'
import Navbar from './NAVBAR/Navbar'
import Signup from './SIGNUP/Signup'
import Phone from './PHONE/Phone'

function App() {
 
 

  return (

    <div>

   <BrowserRouter>
   
   

   <Routes>

   <Route path="/*" 
      element={

       <>
       
        <Navbar />
        <Carousel />
        <EidSpecial/>
        <Best />
        <Entertainment />
        <Entertainment2 />
        <Free />
        <Bng />
        <MovieMap />
        <Hollywood /> 
        <Love />
        <Footer />
       
       
       </>

     } 
     
     />


      <Route path="/login"

          element= {

          <>
          
          <Login />
          
          </>
    
        }


    />

      <Route path="/signup"

      element= {

      <>

      <Signup />

      </>

      }


      />



      <Route path="/phone"

      element= {

      <>

      <Phone />

      </>

      }


      />
   </Routes>
   
    
   </BrowserRouter>

    {/* <Phone />

    <Signup /> */}
  
   {/* <Login /> */}
  


   </div>
  )
}

export default App
