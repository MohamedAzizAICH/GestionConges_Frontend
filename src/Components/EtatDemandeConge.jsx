import React from 'react';
import { Table,Badge} from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';


function EtatDemandeConge() {

  const currentUserId = JSON.parse(localStorage.getItem('user')).id;

  const [LeaveRequest, setLeaveRequest] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/api/employe/showRequestStatus/${currentUserId}`)
   .then(res => {
    setLeaveRequest(res.data)
  }).catch(err => console.log(err))
  }, []);


  

  const arr = LeaveRequest.map((LeaveRequest,index) => { 
    
    let status
    if(LeaveRequest.requestStatus == "Accepté"){
       status = <Badge color="success"> {LeaveRequest.requestStatus} </Badge> 
    }else if(LeaveRequest.requestStatus == "Réfusé"){
      status = <Badge color="danger"> {LeaveRequest.requestStatus} </Badge> 
   }else{
    status = <Badge color="warning"> {LeaveRequest.requestStatus} </Badge> 
   }
    
   
  
   
    return (
     
    <tr key={index}>
    <th scope="row">
      {index+1}
    </th>
    <td>
       {LeaveRequest.startDate}
    </td>
    <td>
     {LeaveRequest.daysOffNumber}
    </td>
    <td>
     {LeaveRequest.reasonForLeave}
    </td>
    <td>
  {status}
    </td>
  </tr>
    );
  })

  return (
    <Table
    bordered
    hover
    responsive
    size=""
    striped
  >
    <thead>
      <tr>
        <th>
          Demande numéro :
        </th>
        <th>
          Date debut congé
        </th>
        <th>
          Durée
        </th>
        <th>
          Justification congé
        </th>
        <th>
          Etat demande
        </th>
      </tr>
    </thead>
    <tbody>
    {arr}
    </tbody>
  </Table>
  
  );

}


export default EtatDemandeConge;
