import React from 'react';

import FormulaireDemandeCongé from '../Components/FormulaireDemandeCongé';
import Header from '../Components/Header';
import SidebarPartieAdmin from '../Components/SidebarPartieAdmin';
import  '../css/Page_DemanderConge.css'

function PageDemanderCongéAdmin() {
  return (
    <div className='DemanderCongeRH'> 

    <div className="DemanderCongéContainer">
    
    <div className="ContainerPartie1" >
         <SidebarPartieAdmin />
    </div>
    
    <div className="ContainerPartie2" >
        <Header role="Administrateur"/>
        <FormulaireDemandeCongé />
    </div>
    
    </div>
    
          </div>
  );
}

export default PageDemanderCongéAdmin;
