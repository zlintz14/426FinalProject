import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBAlert, MDBBtn } from 'mdbreact';

function Goals(props) {
  const [message, setMessage] = useState();
  let myStorage = window.localStorage;
  let jwt = myStorage.getItem('jwt');
  const axios = require('axios');

  useEffect(() => {
    axios
      .get('http://localhost:3000/private/message', {
        headers: {
          Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
        }
      })
      .then(response => {
        setMessage(response.data.result);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {message ? (
        <MDBContainer className="mb-0 center-div" style={{'text-align':'center'}}>
            <br></br>
            <br></br>
          <MDBBtn>Create inspirational message</MDBBtn>
          <MDBBtn>Delete inspirational message</MDBBtn>
<MDBAlert color="info" className="mt-2 mb-0 my-alert center-div">{message}</MDBAlert>
        </MDBContainer>
      ) : (
        false
      )}
    </div>
  );
}

export default Goals;
