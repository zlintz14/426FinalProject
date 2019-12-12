import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBAlert, MDBBtn, MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import variables from '../App.scss';

function Goals(props) {
  const [message, setMessage] = useState();
  let myStorage = window.localStorage;
  let jwt = myStorage.getItem('jwt');
  const axios = require('axios');


  useEffect(() => {
    // axios.delete('http://localhost:3000/private/', {
    //   headers: {
    //     Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
    //   }
    // });


    // axios
    //   .post(
    //     `http://localhost:3000/private/goals`,
    //     {
    //       data: {'Run Longer': 'Run Longer'},
    //       type: 'merge'
    //     },
    //     {
    //       headers: {
    //         Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
    //       }
    //     }
    //   )


    axios
      .get('http://localhost:3000/private/goals', {
        headers: {
          Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
        }
      })
      .then(response => {
        console.log('response',message)
      })
  }, []);

  let deleteGoal = function(text){
      console.log(text)
  }

  return (
    <div>
      {message ? (
        <MDBContainer>
            <br></br>
          <MDBListGroup>
            <MDBListGroupItem style={{'backgroundColor':variables.primary, 'color':'white'}}>Other Users' Goals</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in<i onClick={(e)=>deleteGoal.bind(this,e.target.textContent)}class="far fa-times-circle float-right pt-1"></i></MDBListGroupItem>
            <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
      ) : (
        false
      )}
    </div>
  );
}

export default Goals;
