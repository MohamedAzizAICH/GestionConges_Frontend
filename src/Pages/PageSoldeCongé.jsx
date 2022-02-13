import React from 'react';

import Header from '../Components/Header';
import SidebarPartieEmploye from '../Components/SidebarPartieEmploye';
import SoldeConge from '../Components/SoldeConge';
import  '../css/Page_SoldeCongé.css'

function PageSoldeCongé() {
  return (
      <div className='PageSoldeCongeContainer'>
             <div className="ContainerPartie1" >
                  <SidebarPartieEmploye />
            </div>

            <div className="ContainerPartie2" >
                <Header role="employé" />
                <SoldeConge />
           </div>
      </div>
  );
}

export default PageSoldeCongé;
