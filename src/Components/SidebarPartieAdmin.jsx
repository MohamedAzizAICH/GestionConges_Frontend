import React from 'react';
import Logo from '../Images/Logo.PNG'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';

import  '../css/SideBarPartieAdmin.css'

import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom";




function SidebarPartieAdmin() {

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
      
          <div className='SidebarRH'>

           
<img className="Logo" src={Logo} alt="Logo" />

<Stack className=" btn " direction="column" spacing={6}>

<Button> <h5>  <Link className='linkNav' to="/listeEmployeADMIN"> Liste des employés  </Link> </h5> </Button> 
<Button> <h5>  <Link className='linkNav' to="/listeInscriptionADMIN"> Liste des inscriptions  </Link> </h5> </Button> 
<Button> <h5>  <Link className='linkNav' to="/listeDemandeCongeADMIN"> Liste des demandes congés </Link> </h5>  </Button>  
<Button> <h5>  <Link className='linkNav' to="/demandercongéADMIN"> Demander congé </Link> </h5> </Button> 
<Button> <h5>  <Link className='linkNav' to="/etatdemandecongéADMIN"> Etat demande congé  </Link> </h5>  </Button> 
<Button> <h5>  <Link className='linkNav' to="/soldeCongéAdmin">  Solde congé </Link>  </h5>  </Button> 

</Stack>

<Button variant="outlined" startIcon={<LogoutIcon />} onClick={logout}>  Deconnecté
</Button> 

      </div>
     
  );
}

export default SidebarPartieAdmin;
