import React from 'react';
import SidebarPartieAdmin from '../Components/SidebarPartieAdmin';
import Header from '../Components/Header';
import ListeDemandeCongé from '../Components/ListeDemandeCongé';
import  '../css/Page_SoldeCongé.css'

function PageListeDemandeCongéAdmin() {
  return  (
    <div className='PageSoldeCongeContainer'>
    <div className="ContainerPartie1" >
    <SidebarPartieAdmin />
   </div>

   <div className="ContainerPartie2" >
       <Header role="Administrateur" />
       <ListeDemandeCongé />
  </div>
</div>
  );
}

export default PageListeDemandeCongéAdmin;
