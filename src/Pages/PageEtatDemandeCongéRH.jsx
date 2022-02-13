import React from 'react';

import EtatDemandeConge from '../Components/EtatDemandeConge';
import Header from '../Components/Header';
import SideBarPartieRH from '../Components/SideBarPartieRH';
import  '../css/Page_EtatDemandeConge.css'

function PageEtatDemandeCongéRH() {
  return <div className='EtatDemandeCongeContainer'>

  <div className="ContainerPartie1" >
        <SideBarPartieRH  />
  </div>

  <div className="ContainerPartie2" >
      <Header role="Responsable RH" />
      <EtatDemandeConge />
 </div>
</div>
}

export default PageEtatDemandeCongéRH;
