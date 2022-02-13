import React from 'react';

import Header from '../Components/Header';
import SidebarPartieAdmin from '../Components/SidebarPartieAdmin';
import SoldeConge from '../Components/SoldeConge';
import  '../css/Page_SoldeCongé.css'

function PageSoldeCongéAdmin() {
  return(
  
  <div className='PageSoldeCongeContainer'>
  <div className="ContainerPartie1" >
  <SidebarPartieAdmin />
 </div>

 <div className="ContainerPartie2" >
     <Header role="Administrateur" />
     <SoldeConge />
</div>
</div>

);
}

export default PageSoldeCongéAdmin;
