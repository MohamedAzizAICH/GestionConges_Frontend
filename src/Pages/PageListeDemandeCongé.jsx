import React from 'react';

import Header from '../Components/Header';
import ListeDemandeCongé from '../Components/ListeDemandeCongé';

import SideBarPartieRH from '../Components/SideBarPartieRH';
import  '../css/Page_SoldeCongé.css'

function PageListeDemandeCongé() {
  return (
    <div className='PageSoldeCongeContainer'>
    <div className="ContainerPartie1" >
    <SideBarPartieRH  />
   </div>

   <div className="ContainerPartie2" >
       <Header role="Responsable RH" />
       <ListeDemandeCongé />
  </div>
</div>
  );
}

export default PageListeDemandeCongé;
