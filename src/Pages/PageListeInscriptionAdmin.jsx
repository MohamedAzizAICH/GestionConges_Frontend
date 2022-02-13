import React from 'react';

import SidebarPartieAdmin from '../Components/SidebarPartieAdmin';
import Header from '../Components/Header';
import  '../css/Page_SoldeCongé.css'
import ListeInscriptionAdmin from '../Components/ListeInscriptionAdmin';

function PageListeInscriptionAdmin() {
  return  (

  <div className='PageSoldeCongeContainer'>
  <div className="ContainerPartie1" >
  <SidebarPartieAdmin />
 </div>

 <div className="ContainerPartie2" >
      <Header role="Administrateur" />
      <ListeInscriptionAdmin />
       
</div>
</div>

);
}

export default PageListeInscriptionAdmin;
