import React from 'react';

import Logo from '../Images/Logo.PNG'

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';

import  '../css/HomeNavbar.css'

function HomeNavbar() {
  return (

           <div className='Navbar'> 
               <img className="Logo" src={Logo} alt="Logo" />
               <Stack direction="row" spacing={3}>
               <Button><h5> <Link className='linkNav' to="/"> Accueil </Link> </h5></Button>
               <Button> <h5><Link  className='linkNav' to="/login"> Se Connecter </Link> </h5> </Button>
                     <Button variant="contained" >
                         <h5> <Link  className='linkNavBtn' to="/inscription"> S'inscrire </Link> </h5>
                     </Button>
                 </Stack>
             </div>
  );
}

export default HomeNavbar;
