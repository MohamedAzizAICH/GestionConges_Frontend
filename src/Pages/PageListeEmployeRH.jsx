import React from 'react'
import Header from '../Components/Header';
import ListeEmployéRH from '../Components/ListeEmployéRH';
import SideBarPartieRH from '../Components/SideBarPartieRH';
import  '../css/Page_DemanderConge.css'

function PageListeEmployeRH() {
  return (
    
      <div className='DemanderCongeRH'> 

<div className="DemanderCongéContainer">

<div className="ContainerPartie1" >
     <SideBarPartieRH />
</div>

<div className="ContainerPartie2" >
    <Header role="Responsable RH"/>
    <ListeEmployéRH />
</div>

</div>

      </div>
  );
}
 

export default PageListeEmployeRH