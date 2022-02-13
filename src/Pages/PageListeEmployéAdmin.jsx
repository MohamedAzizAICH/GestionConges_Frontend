import React from 'react';

import SidebarPartieAdmin from '../Components/SidebarPartieAdmin';
import Header from '../Components/Header';
import  '../css/Page_SoldeCongé.css'
import ListeEmployé from '../Components/ListeEmployé';

function PageListeEmployéAdmin() {
  return (
  
  <div className='PageSoldeCongeContainer'>
  <div className="ContainerPartie1" >
  <SidebarPartieAdmin />
 </div>

 <div className="ContainerPartie2" >
      <Header role="Administrateur" />
      <ListeEmployé />
       
</div>
</div>

);
}

export default PageListeEmployéAdmin;
