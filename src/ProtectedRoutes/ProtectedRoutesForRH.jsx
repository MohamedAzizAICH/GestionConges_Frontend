import React from 'react';
import {Redirect,Route} from 'react-router';

const ProtectedRoutesForRH = ({component:Component, ...rest})  =>{
  return (
      <div>
    <Route {...rest} render={(props) =>{
         if (JSON.parse(localStorage.getItem('user')) != null  && JSON.parse(localStorage.getItem('user')).roles.length == 2) return <Component {...props} />
         if (JSON.parse(localStorage.getItem('user')) == null  || JSON.parse(localStorage.getItem('user')).roles.length != 2) return <Redirect to={{path : '/', state : {from : 
         props.location}}} />
         
    }} />
    </div>
  );
}

export default ProtectedRoutesForRH;