import React from 'react';

import Header from '../Components/Header';
import SideBarPartieRH from '../Components/SideBarPartieRH';
import SoldeConge from '../Components/SoldeConge';
import  '../css/Page_SoldeCongé.css'

function PageSoldeCongéRH() {
  return (
    <div className='PageSoldeCongeContainer'>
           <div className="ContainerPartie1" >
           <SideBarPartieRH  />
          </div>

          <div className="ContainerPartie2" >
              <Header role="Responsable RH" />
              <SoldeConge />
         </div>
    </div>
);
}

export default PageSoldeCongéRH;
