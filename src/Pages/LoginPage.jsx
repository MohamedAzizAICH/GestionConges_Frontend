import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Logo from '../Images/Logo.PNG'
import ImageLoginPage from '../Images/ImageLoginPage.svg'
import {useHistory} from "react-router-dom";


import { Button,FormGroup,Form,Input,Label } from 'reactstrap';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import  '../css/Page_Login.css'


function LoginPage() {

  const history = useHistory();
  const [ email, SetEmail ]  = useState('');
  const [ password, SetPassword ]  = useState('');

  

  const login = () => {
    Axios.post("http://localhost:8080/api/auth/signin", {
      email : email,
      password : password
    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        if(response.data.roles.includes ("ROLE_ADMIN")){
          history.push("/espaceAdmin");
        }
        else if(response.data.roles.includes("ROLE_RH") ){
          history.push("/espaceRH");
        }else{
          history.push("/espaceEmploye");
        }
      }
     
  
    }).catch (error => {
      window.alert("Wrong try")
  });
  }; 


  return (

         <div className='LoginContainer'>

             <div className='LoginContainer1'>

                <img className="Logo" src={Logo} alt="Logo" />
                 <h2 className='textInscri'> Votre plateforme pour simplifier la gestion des congés. </h2> <br /><br />
                   <div className="ImageLoginPagePosition">
                      <img className="ImageLoginPage" src={ImageLoginPage} alt="Image" />
                   </div>

             </div>

             <div className='LoginContainer2'>

             <h1 > Connectez-vous à  <span> Gestion Congé ! </span> </h1>
             <Form>
             <FormGroup floating>
                       <Input  id="Email" name="Email" placeholder="Email" type="email" onChange = {(e) =>{
                               SetEmail(e.target.value);
                            }}/>
                         <Label for="Email">
                            <div className="input">  <EmailIcon  /> <p className="txtInput"> Email..  </p> </div>
                        </Label>
                     </FormGroup>
    
                     <FormGroup floating>
                       <Input  id="Password" name="Password" placeholder="Password" type="password" onChange = {(e) =>{
                               SetPassword(e.target.value);
                            }}/>
                          <Label for="Password">
                              <div className="input">  <VpnKeyIcon/> <p className="txtInput"> Mot de passe.. </p> </div>
                          </Label>
                     </FormGroup>

                <Button block color="primary" size="lg" onClick={login} > Se Connecter </Button>

             </Form>
              
                   <div className="links" >
                       <p className="links1"> Vous n'avez pas de compte?    </p>
                       <p className="a"> <a  className="links2" href="/inscription"> Créer un compte </a>   </p>
                  </div>   

             </div>
         </div>
  )
}

export default LoginPage;
