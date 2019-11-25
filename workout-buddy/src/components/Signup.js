import React from "react";
import { MDBBtn, MDBInput, MDBCard, MDBContainer } from "mdbreact";

function Login(props) {
  return (
    <div className="full-page-div background-gradient">
      <MDBContainer className="d-flex flex-column p2 align">
        <MDBCard className="login-card">
          <h1 className="is-primary font-weight-bold" style={{ margin: "auto" }}>Create Account</h1>
          <div className="mx-3">
            <MDBInput label="First Name"></MDBInput>
            <MDBInput label="Last Name"></MDBInput>
            <MDBInput label="Username"></MDBInput>
            <MDBInput label="Password"></MDBInput>
            <MDBInput label="Confirm Passwrod"></MDBInput>
          </div>
          <MDBBtn>Sign Up!</MDBBtn>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
