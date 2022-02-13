import React from 'react';
import  EspaceEmploye from '../Images/EmployeEspace.svg'

import Header from '../Components/Header';
import SidebarPartieEmploye from '../Components/SidebarPartieEmploye';

import  '../css/EspaceEmploye.css'


function EspaceWelcomeEmploye() {
  return (
    <div className="EspaceEmployeContainer">

    <div className="ContainerPartie1" >
         <SidebarPartieEmploye />
    </div>

    <div className="ContainerPartie2" >
        <Header role="employé"/>
        <img className="EspaceEmployePic" src={EspaceEmploye} alt="Logo" />
   </div>

</div>
  );
}

export default EspaceWelcomeEmploye;
