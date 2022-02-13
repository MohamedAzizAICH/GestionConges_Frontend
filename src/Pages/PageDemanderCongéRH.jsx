import React from 'react';

import FormulaireDemandeCongé from '../Components/FormulaireDemandeCongé';
import Header from '../Components/Header';
import SideBarPartieRH from '../Components/SideBarPartieRH';
import  '../css/Page_DemanderConge.css'

function PageDemanderCongéRH() {
  return (
      <div className='DemanderCongeRH'> 

<div className="DemanderCongéContainer">

<div className="ContainerPartie1" >
     <SideBarPartieRH />
</div>

<div className="ContainerPartie2" >
    <Header role="Responsable RH"/>
    <FormulaireDemandeCongé />
</div>

</div>

      </div>
  );
}

export default PageDemanderCongéRH;
