import React, { useState } from "react";
import { MDBBtn, MDBInput, MDBCard, MDBContainer } from "mdbreact";
import Axios from "axios";

const createUrl = "http://localhost/3000/account";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const axios = require("axios");

  let doPasswordsMatch = function() {
    if (password === passwordVerification) {
      setShowError(false);
      return true;
    } else {
      setShowError(true);
      return false;
    }
  };

  let allFieldsValid = function() {
    if (
      !(firstName && lastName && username && password && passwordVerification)
    ) {
      setErrorMessage("Please fill out all fields");
      return false;
    } else if (!doPasswordsMatch()) {
      setErrorMessage("Passwords must match");
      return false;
    }
    setShowError(false);
    return true;
  };

  let createNewUser = async function() {
    if (allFieldsValid()) {
      axios
        .post("http://localhost:3000/account/create", {
          "name": username,
          "pass": password,
          "data": {
            "firstName": firstName,
            "lastName": lastName
          }
        })
        .catch(e => {
          setErrorMessage(e.response.data.msg);
          setShowError(true);
        });
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="full-page-div background-gradient">
      <MDBContainer className="d-flex flex-column p2 align">
        <MDBCard className="login-card">
          <h1
            className="is-primary font-weight-bold"
            style={{ margin: "auto" }}
          >
            Create Account
          </h1>
          <div className="mx-3">
            <MDBInput
              onChange={e => setFirstName(e.target.value)}
              label="First Name"
            ></MDBInput>
            <MDBInput
              onChange={e => setLastName(e.target.value)}
              label="Last Name"
            ></MDBInput>
            <MDBInput
              onChange={e => setUsername(e.target.value)}
              label="Username"
            ></MDBInput>
            <MDBInput
              onChange={e => setPassword(e.target.value)}
              label="Password"
              type="password"
            ></MDBInput>
            <MDBInput
              onChange={e => setPasswordVerification(e.target.value)}
              label="Confirm Password"
              type="password"
            ></MDBInput>
          </div>
          <MDBBtn onClick={createNewUser}>Sign Up!</MDBBtn>
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

export default Signup;
