import React from 'react';
import  EspaceAdmin from '../Images/EspaceAdmin.svg'
import Header from '../Components/Header';
import  '../css/EspaceRH.css'
import SidebarPartieAdmin from '../Components/SidebarPartieAdmin';

function EspaceWelcomeAdmin() {
  return (
      <div className='EspaceContainer'>

    <div className="ContainerPartie1" >
         <SidebarPartieAdmin />
    </div>

    <div className="ContainerPartie2" >
        <Header role="Administrateur"/>
        <img className="EspaceEmployePic" src={EspaceAdmin} alt="Logo" />
   </div>

      </div>
  );
}

export default EspaceWelcomeAdmin;
