import React from 'react';
import { Table,Button} from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Modal,ModalHeader,ModalBody,ModalFooter,Input} from 'reactstrap';


function ListeInscriptionAdmin() {

const [Inscription, setInscription] = useState([])

useEffect(() => {
   axios.get('http://localhost:8080/api/admin/getAllInscription')
     .then(res => {
       console.log(res.data)
         setInscription(res.data)
      }).catch(err => console.log(err))
   }, []);

const activeAccount = (id) =>{
    if (window.confirm('Are you sure you want to active this')){
       axios.put(`http://localhost:8080/api/admin/activeAccount/${id}`)
          .then(window.alert("Account Activated !")).catch(err => console.log(err))
      }
   }

const makeRH = (id) =>{
    if (window.confirm('Are you sure you want to add this employe role RH')){
       axios.put(`http://localhost:8080/api/admin/makeRH/${id}`)
          .then(window.alert("Role RH Added !")).catch(err => console.log(err))
      }
   }



const [modal, setModal] = useState(-1);

const toggle = (el) => { setModal(el.id)}


const [ balance, SetBalance ]  = useState('');

const addSolde = (id) =>{
  axios.put(`http://localhost:8080/api/admin/addSolde/${id}`, {
      balance : balance
    }).then( setModal(!modal))
  }

  return ( 
  <Table bordered hover responsive size="" striped>
    <thead>

      <tr>
        <th> Nom </th>
        <th> Prénom </th>
        <th> Adresse </th>
        <th> Date de naissance </th>
         <th> Email </th>
      </tr>

    </thead>
    <tbody>

       {Inscription.map((el,index) => ( 
           <tr key={index}>
               <th scope="row"> {el.name} </th>
                  <td> {el.firstName} </td>
                  <td> {el.adress} </td>
                  <td> {el.dateOfBirth} </td>
                  <td> {el.email} </td>
                  <td>
                    <div className='btnBlock'>
                      <Button color="success" outline onClick= {() => activeAccount(el.id)} > Activer Compte </Button>
                      <Button color="warning" outline onClick= {() => makeRH(el.id)} > Affecter Role RH </Button>
                      <Button color="primary" outline onClick={() => toggle(el)} > Affecter solde congé </Button>

                      <Modal isOpen={modal === el.id} toggle={toggle} id={el.id}>
                        <ModalHeader>
                          Add leave balance for : {el.firstName}
                        </ModalHeader>
                        <ModalBody>
                          <Input type="number" onChange = {(e) =>{SetBalance(e.target.value);}}  />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick= {() => addSolde(el.id)}> Add balance  </Button>
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

export default ListeInscriptionAdmin;
