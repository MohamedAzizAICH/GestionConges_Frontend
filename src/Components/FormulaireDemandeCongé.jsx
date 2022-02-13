import React from 'react';
import {FormGroup,Form,Input,Label } from 'reactstrap';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import axios from 'axios';

function FormulaireDemandeCongé() {

  const currentUserId = JSON.parse(localStorage.getItem('user')).id;
  
  const [ startDate, SetStartDate ]  = useState('');
  const [ daysOffNumber, SetDaysOffNumber ]  = useState('');
  const [ reasonForLeave, SetReasonForLeave ]  = useState('');

  const askForLeave = (id) => {
    if (window.confirm('Are you sure you want to submit this request')){
    axios.post(`http://localhost:8080/api/employe/askForLeave/${id}`, {
      startDate : startDate,
      daysOffNumber : daysOffNumber,
      reasonForLeave : reasonForLeave
    }).then(window.alert("request submited !"))
  };
}

const balance = JSON.parse(localStorage.getItem('user')).balance;

let buttonSubmit 



if( balance == 0 ){
  buttonSubmit = <Button variant="outlined" disabled endIcon={<SendIcon />} onClick={() => askForLeave(currentUserId)}> Submit </Button>
}else{
  buttonSubmit = <Button variant="outlined"  endIcon={<SendIcon />} onClick={() => askForLeave(currentUserId)}> Submit </Button>
}

  return (

      <div className='FormDemandeConge'>  

<Form inline>

  <FormGroup>
    <Label for="startDate"> Date début congé : </Label>
    <Input id="startDate"  name="startDate" type="date"  onChange = {(e) =>{ SetStartDate(e.target.value); }}  />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label for="daysOffNumber"> Nombre du jour de congé :  </Label>
    <Input id="daysOffNumber"  name="daysOffNumber"  type="number" onChange = {(e) =>{ SetDaysOffNumber(e.target.value); }} />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label for="reasonForLeave"> Justification du congé :  </Label>
    <Input id="reasonForLeave"  name="reasonForLeave"  type="textarea" onChange = {(e) =>{ SetReasonForLeave(e.target.value); }}/>
  </FormGroup>
  {' '}
  {buttonSubmit}
</Form>
      
      </div>
  );
}

export default FormulaireDemandeCongé;
