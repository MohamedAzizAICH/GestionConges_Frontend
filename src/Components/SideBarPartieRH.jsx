import React from 'react';

import Logo from '../Images/Logo.PNG'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';

import  '../css/SideBarPartieRh.css'

import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom";

function SideBarPartieRH() {

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
      <div className='SidebarRH'>

           
<img className="Logo" src={Logo} alt="Logo" />

<Stack className=" btn " direction="column" spacing={6}>

<Button> <h5>  <Link className='linkNav' to="/ListeEmployéRH"> Liste des employés  </Link> </h5> </Button> 
<Button> <h5>  <Link className='linkNav' to="/listeInscription"> Liste des inscriptions  </Link> </h5> </Button> 
<Button> <h5>  <Link className='linkNav' to="/listeDemandeConge"> Liste des demandes congés </Link> </h5>  </Button>  
<Button> <h5>  <Link className='linkNav' to="/DemanderCongeRH"> Demander congé </Link> </h5> </Button> 
<Button> <h5>  <Link className='linkNav' to="/etatdemandecongeRH"> Etat demande congé  </Link> </h5>  </Button> 
<Button> <h5>  <Link className='linkNav' to="/soldecongeRH">  Solde congé </Link>  </h5>  </Button> 

</Stack>

<Button variant="outlined" startIcon={<LogoutIcon />} onClick={logout}>  Deconnecté
</Button> 

      </div>
  );
}

export default SideBarPartieRH;
