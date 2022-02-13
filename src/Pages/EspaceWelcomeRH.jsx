import React from 'react';
import Header from '../Components/Header';
import SideBarPartieRH from '../Components/SideBarPartieRH';
import  EspaceRH from '../Images/EspaceRH.svg'

import  '../css/EspaceRH.css'

function EspaceWelcomeRH() {
  return (
      <div className='EspaceContainer'>

           <div className="ContainerPartie1" >
               <SideBarPartieRH />
           </div>

           <div className="ContainerPartie2" >
                <Header role="Responsable RH" />
                <img className="EspaceEmployePic" src={EspaceRH} alt="Logo" />
           </div>

      </div>
  );
}

export default EspaceWelcomeRH;
