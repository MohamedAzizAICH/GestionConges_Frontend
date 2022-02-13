import React from 'react';
import { Table,Button} from 'reactstrap';
import  '../css/ListeDemandeConge.css'
import { useEffect, useState } from 'react';
import axios from 'axios';



function ListeDemandeCongé() {


  const [LeaveRequest, setLeaveRequest] = useState([])
   

  useEffect(() => {
    axios.get('http://localhost:8080/api/rh/showEmployeRequest')
   .then(res => {
    setLeaveRequest(res.data)
    
  }).catch(err => console.log(err))
  }, []);

 



  

  const acceptRequest = (id,id2) =>{
    if (window.confirm('Are you sure you want to accept this request')){
    axios.put(`http://localhost:8080/api/rh/acceptEmployeRequest/${id}`)
    axios.put(`http://localhost:8080/api/rh/editBalance/${id}/${id2}`) 
    .then(window.alert("request accepted")).then(window.location.reload()).catch(err => console.log(err))
     
 }
}

 const refuseRequest = (id) =>{
  if (window.confirm('Are you sure you want to refuse this request')){
  axios.put(`http://localhost:8080/api/rh/refuseEmployeRequest/${id}`)
  .then(window.alert("request refused")).then(window.location.reload()).catch(err => console.log(err))
}
 }

 

  return (
<Table bordered hover responsive size="" striped>
  <thead>
    <tr>
      <th>Demande numéro</th>
      <th>Nom employe</th>
      <th>Date début congé</th>
      <th>Nombre de jours</th>
      <th>Justification de congé</th>
    </tr>
  </thead>
  <tbody>
  {LeaveRequest.map((LeaveRequest,index) => (
    <tr  key={index}>
      <th scope="row">{index+1}</th>
         <td>{LeaveRequest.user_id}</td>
         <td>{LeaveRequest.startDate}</td>
         <td>{LeaveRequest.daysOffNumber}</td>
         <td>{LeaveRequest.reasonForLeave}</td>
         <td>
             <div className='btnBlock'>
             <Button color="success" outline  onClick={() => acceptRequest(LeaveRequest.id , LeaveRequest.user_id)}  > Accepter congé </Button>
             <Button color="danger" outline   onClick={() => refuseRequest(LeaveRequest.id)} >  Réfuser congé </Button>
            </div>
         </td>
    </tr>
    ))}
  </tbody>
</Table>
);
  
}

export default ListeDemandeCongé;
