import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Logo from '../Images/Logo.PNG'
import ImageLoginPage from '../Images/ImageLoginPage.svg'


import { Button,FormGroup,Form,Input,Label } from 'reactstrap';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import  '../css/Page_Inscription.css'


function InscriptionPage() {


 
  
  const [ name, SetName ]  = useState('');
  const [ firstName, SetFirstName ]  = useState('');
  const [ email, SetEmail ]  = useState('');
  const [ password, SetPassword ]  = useState('');
  const [ adress, SetAdress ]  = useState('');
  const [ dateOfBirth, SetDateOfBirth ]  = useState('');
  

  const register = () => {
    Axios.post("http://localhost:8080/api/auth/signup", {
      name : name,
      firstName : firstName,
      email : email,
      password : password,
      adress : adress,
      dateOfBirth : dateOfBirth,
    }).then(window.alert("Registre succed ! wait for your account activation !"));
  };
  
  return (
  <div className='InscriptionContainer'>

          <div className='InscriptionContainerPartie1'> 

          <img className="Logo" src={Logo} alt="Logo" />

                 <h2 className='textInscri'> Votre plateforme pour simplifier la gestion des congés. </h2> <br /><br />

                   <div className="ImageLoginPagePosition">
                      <img className="ImageLoginPage" src={ImageLoginPage} alt="Image" />
                   </div>
          </div>

          <div className='InscriptionContainerPartie2'> 

          <h1> inscrivez-vous à  <span> Gestion Congé ! </span> </h1>
          
             <Form>

                        <FormGroup floating>
                            <Input  id="name" name="name" onChange = {(e) =>{
                               SetName(e.target.value);
                            }}  

                            />
                              <Label for="name">
                               <div className="input">  <PersonOutlineIcon/> <p className="txtInput"> Nom..  </p> </div>
                              </Label> 
                        </FormGroup>
                     
                        <FormGroup floating>
                          <Input  id="firstName" name="firstName"  onChange = {(e) =>{
                               SetFirstName(e.target.value);
                            }}  />
                             <Label for="Prenom">
                               <div className="input">  <PersonOutlineIcon/> <p className="txtInput"> Prénom..  </p> </div>
                            </Label> 
                        </FormGroup>

                        <FormGroup floating>
                       <Input  id="email" name="email"  type="email" onChange = {(e) =>{
                               SetEmail(e.target.value);
                            }} />
                         <Label for="email">
                            <div className="input">  <EmailIcon/> <p className="txtInput"> Email..  </p> </div>
                        </Label>
                     </FormGroup>
    
                     <FormGroup floating>
                       <Input  id="password" name="password"  type="password" onChange = {(e) =>{
                               SetPassword(e.target.value);
                            }} />
                          <Label for="password">
                              <div className="input">  <VpnKeyIcon/> <p className="txtInput"> Mot de passe.. </p> </div>
                          </Label>
                     </FormGroup>

                        <FormGroup floating>
                           <Input  id="adress" name="adress" onChange = {(e) =>{
                               SetAdress(e.target.value);
                            }}  />
                           <Label for="adress">
                               <div className="input">  <AddLocationAltIcon/> <p className="txtInput"> Adresse..  </p> </div>
                          </Label> 
                        </FormGroup>

                        <FormGroup floating>
                          <Input  id="dateOfBirth" name="dateOfBirth"  type="date" onChange = {(e) =>{
                               SetDateOfBirth(e.target.value);
                            }} />
                           <Label for="dateOfBirth">
                          <div className="input">  <DateRangeIcon/> <p className="txtInput"> DateNaissance..  </p> </div>
                          </Label>
                         </FormGroup>

                      

                <Button block color="primary" size="lg" onClick={register} > S'inscrire </Button>

             </Form>
              
                   <div className="links" >
                       <p className="links1"> Vous vous êtes déjà un membre ?    </p>
                       <p className="a"> <a  className="links2" href="/login"> Se connecter </a>   </p>
                  </div>   
          </div>

  </div>
  );
}

export default InscriptionPage;
