import React from "react";
import { MDBBtn, MDBInput, MDBCard, MDBContainer } from "mdbreact";

function Login(props) {
  return (
    <div className="full-page-div background-gradient">
      <MDBContainer className="d-flex flex-column p2 align">
        <MDBCard className="login-card">
          <h1 className="is-primary font-weight-bold" style={{ margin: "auto" }}>Log in to your account</h1>
          <div className="mx-3">
            <MDBInput label="Username"></MDBInput>
            <MDBInput label="Password"></MDBInput>
          </div>
          <MDBBtn>Login</MDBBtn>
          {/* <MDBBtn>Forgot Password</MDBBtn> */}
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
