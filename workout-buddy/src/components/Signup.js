import React from "react";
import { MDBBtn, MDBInput, MDBCard, MDBContainer } from "mdbreact";


function Login(props) {
  return (
        <MDBContainer
          className="d-flex flex-column p2 align"
          style={{ "margin-top": "10%" }}
        >
          <MDBCard className="login-card">
            <h1 style={{ margin: "auto" }}>Create Account</h1>
            <div className="mx-3">
              <MDBInput label="First Name"></MDBInput>
              <MDBInput label="Last Name"></MDBInput>
              <MDBInput label="Username"></MDBInput>
              <MDBInput label="Password"></MDBInput>
              <MDBInput label="Confirm Passwrod"></MDBInput>
            </div>
            <MDBBtn color="primary">Sign Up!</MDBBtn>
          </MDBCard>
        </MDBContainer>
  );
}

export default Login;