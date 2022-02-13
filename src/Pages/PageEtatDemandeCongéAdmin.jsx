import React from 'react';
import SidebarPartieAdmin from '../Components/SidebarPartieAdmin';
import EtatDemandeConge from '../Components/EtatDemandeConge';
import Header from '../Components/Header';
import  '../css/Page_EtatDemandeConge.css'

function PageEtatDemandeCongéAdmin() {
  return (
    <div className='EtatDemandeCongeContainer'>

    <div className="ContainerPartie1" >
          <SidebarPartieAdmin />
    </div>
  
    <div className="ContainerPartie2" >
        <Header role="Administrateur" />
        <EtatDemandeConge />
   </div>
  </div>
  );
}

export default PageEtatDemandeCongéAdmin;
