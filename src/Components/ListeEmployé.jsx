import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table,Button} from 'reactstrap';
import {Modal,ModalHeader,ModalBody,ModalFooter,Input} from 'reactstrap';



function ListeEmployé() {


  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/admin/getAllEmploye')
   .then(res => {
    console.log(res.data)
    setData(res.data)
  }).catch(err => console.log(err))
  }, []);
  
  
  const del = (id) =>{
    if (window.confirm('Are you sure you want to delete this employe')){
       axios.delete(`http://localhost:8080/api/admin/delete/${id}`)
       .then(
        window.location.reload()
      ).catch(err => console.log(err))
    }
  }

  const [modal, setModal] = useState(-1);

  const toggle = (data) => { setModal(data.id)}

  const [ balance, SetBalance ]  = useState('');

   const addSolde = (id) =>{
        axios.put(`http://localhost:8080/api/admin/addSolde/${id}`, {
           balance : balance
       }).then( setModal(!modal)).then(window.location.reload())
    }



  return ( 
  <Table bordered hover responsive size="" striped>
    <thead>

      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Adresse</th>
        <th>Date de naissance</th>
        <th>Email</th>
        <th>Solde congé</th>
      </tr>

    </thead>
    <tbody>
    
    {data.map((data,index) => ( 
  
    <tr key={index}>

     <th scope="row">{data.name}</th>
       <td>{data.firstName}</td>
       <td>{data.adress}</td>
       <td>{data.dateOfBirth}</td>
       <td>{data.email}</td>
       <td>{data.balance}</td>
       <td>
       <div className='btnBlock'>
        <Button color="danger" onClick={() => del(data.id)}> Supprimer Compte </Button>
        <Button color="success" onClick={() => toggle(data)}> Affecter solde congé </Button>

        <Modal isOpen={modal === data.id} toggle={toggle} id={data.id}>
           <ModalHeader>
              Add leave balance for : {data.firstName}
          </ModalHeader>
          <ModalBody>
               <Input type="number" onChange = {(e) =>{ SetBalance(e.target.value);}} />
          </ModalBody>
          <ModalFooter>
               <Button color="primary" onClick= {() => addSolde(data.id)}>Add balance </Button>
                   {' '}
               <Button onClick= {() => toggle({})}> Cancel </Button>
         </ModalFooter>
        </Modal>

       </div>
       </td>
       
    </tr>
    ))}

     
    </tbody>
    </Table>
  );
}

export default ListeEmployé;
