import React, { useState } from 'react';
import { MDBBtn, MDBInput, MDBCard, MDBContainer } from 'mdbreact';

let myStorage = window.localStorage;

function Login(props) {
  const axios = require('axios');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  let loginUser = function(e) {
    e.preventDefault();
    if (username && password) {
      axios
        .post('http://localhost:3000/account/login', {
          name: username,
          pass: password
        })
        .then(response => {
          myStorage.setItem('jwt', response.data.jwt);
          let jwt = myStorage.getItem('jwt');
          localStorage.setItem("userLoggedIn", true)
          window.location.href = 'http://localhost:3001/user';
        })
        .catch(e => {
          setErrorMessage(e.response.data.msg);
          setShowError(true);
        });
      setShowError(false);
    } else {
      setErrorMessage('Please fill out all fields');
      setShowError(true);
    }
  };
  return (
    <div className="full-page-div background-gradient">
      <MDBContainer className="d-flex flex-column p2 align">
        <MDBCard className="login-card">
          <h1
            className="is-primary font-weight-bold"
            style={{ margin: 'auto' }}
          >
            Log in to your account
          </h1>
          <form onSubmit={loginUser}>
            <div className="mx-3">
              <MDBInput
                label="Username"
                onChange={e => setUsername(e.target.value)}
              ></MDBInput>
              <MDBInput
                type="password"
                label="Password"
                onChange={e => setPassword(e.target.value)}
              ></MDBInput>
            </div>
            <MDBBtn type="submit" onClick={loginUser}>
              Login
            </MDBBtn>
          </form>
          {showError ? (
            <p className="text-center text-danger font-weight-bold">
              {errorMessage}
            </p>
          ) : (
            false
          )}
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
