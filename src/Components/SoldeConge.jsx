import React from 'react';
import {Card,CardBody,CardTitle,CardSubtitle, CardText , Button} from 'reactstrap'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import  '../css/ComponentSoldeConge.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


 
function SoldeConge() {

  const currentUserId = JSON.parse(localStorage.getItem('user')).id;

  const [UserInfo, setUserInfo] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/api/employe/showBalance/${currentUserId}`)
   .then(res => {
    console.log(res.data.balance)
   setUserInfo(res.data.balance)
  }).catch(err => console.log(err))
  }, []);

   

  return (
    <div>
    <Card
      body
    >
      <CardBody>
        <CardTitle tag="h2">
         Votre solde Congé
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h4"
        >
         <AccountBalanceWalletIcon />
        </CardSubtitle>
        <CardText tag="h3">
        {UserInfo}
        </CardText>
    
      </CardBody>
    </Card>
  </div>
  );
}

export default SoldeConge;
