import React from 'react';

import Header from '../Components/Header';
import ListeInscription from '../Components/ListeInscription';
import SideBarPartieRH from '../Components/SideBarPartieRH';
import  '../css/Page_SoldeCongé.css'

function PageListeInscription() {
  return  (
    <div className='PageSoldeCongeContainer'>
           <div className="ContainerPartie1" >
           <SideBarPartieRH  />
          </div>

          <div className="ContainerPartie2" >
              <Header role="Responsable RH" />
              <ListeInscription />
         </div>
    </div>
);
}

export default PageListeInscription;
