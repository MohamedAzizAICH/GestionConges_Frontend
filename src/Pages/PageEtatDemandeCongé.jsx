import React from 'react';

import EtatDemandeConge from '../Components/EtatDemandeConge';
import Header from '../Components/Header';
import SidebarPartieEmploye from '../Components/SidebarPartieEmploye';
import  '../css/Page_EtatDemandeConge.css'

function EtatDemandeCongé() {
  return (

    <div className='EtatDemandeCongeContainer'>

            <div className="ContainerPartie1" >
                  <SidebarPartieEmploye  />
            </div>

            <div className="ContainerPartie2" >
                <Header role="employé" />
                <EtatDemandeConge />
           </div>
    </div>

  );
}

export default EtatDemandeCongé;


