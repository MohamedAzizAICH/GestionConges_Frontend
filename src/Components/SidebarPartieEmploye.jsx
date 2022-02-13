import React from 'react';

import Logo from '../Images/Logo.PNG'


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom";

import  '../css/SideBarPartieEmploye.css'

function SidebarPartieEmploye() {

     const history = useHistory();

     const logout = () => {
       localStorage.removeItem("user");
       history.push("/");
     };

  return (

       <div className='SidebarEmploye'>
            
            <img className="Logo" src={Logo} alt="Logo" />

            <Stack className=" btn " direction="column" spacing={6}>

            <Button> <h5>  <Link className='linkNav' to="/DemanderConge"> Demander congé </Link> </h5> </Button> 
            <Button> <h5>  <Link className='linkNav' to="/etatdemandeconge"> Etat demande congé  </Link> </h5>  </Button> 
            <Button> <h5>  <Link className='linkNav' to="/soldeconge">  Solde congé </Link>  </h5>  </Button> 

            </Stack>

            <Button variant="outlined" startIcon={<LogoutIcon />} onClick={logout}>  Deconnecté
      </Button>

            
           

       </div>
   

  );
}

export default SidebarPartieEmploye;

