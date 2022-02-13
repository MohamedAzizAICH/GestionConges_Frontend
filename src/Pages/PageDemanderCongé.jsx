import React from 'react';
import FormulaireDemandeCongé from '../Components/FormulaireDemandeCongé';
import Header from '../Components/Header';
import SidebarPartieEmploye from '../Components/SidebarPartieEmploye';
import  '../css/Page_DemanderConge.css'


function DemanderCongé() {
  return (
      <div className="DemanderCongéContainer">

            <div className="ContainerPartie1" >
                 <SidebarPartieEmploye />
            </div>

            <div className="ContainerPartie2" >
                <Header role="employé"/>
                <FormulaireDemandeCongé />
           </div>

      </div>
  );
}

export default DemanderCongé;
