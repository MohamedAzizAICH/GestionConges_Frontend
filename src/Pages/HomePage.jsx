import React from 'react';
import ImageHomePage from '../Images/HomeContentPic.svg'

import  '../css/Page_Home.css'

import HomeNavbar from '../Components/HomeNavbar';


function HomePage() {
  return (
      
<div className='HomePageContainer'> 

    <HomeNavbar />
    

             <div className='HomeContent'> 
                  <h2 className='text'> Notre plateforme <span> Gestion congé </span> simplifier <br /> la gestion des congés  au sein de votre entreprise.  </h2> 
                  
                 <img className="ImageHomePage" src={ImageHomePage} alt="Image" />
             
             </div>

       

      </div>
  )
}

export default HomePage;
