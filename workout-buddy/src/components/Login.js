import React from "react";
import { MDBBtn, MDBInput, MDBCard, MDBContainer } from "mdbreact";


function Login(props) {
  return (
        <MDBContainer
          className="d-flex flex-column p2 align"
          style={{ "margin-top": "10%" }}
        >
          <MDBCard className="login-card">
            <h1 style={{ margin: "auto" }}>Login</h1>
            <div className="mx-3">
              <MDBInput label="Username"></MDBInput>
              <MDBInput label="Password"></MDBInput>
            </div>
            <MDBBtn color="primary">Login</MDBBtn>
            {/* <MDBBtn>Forgot Password</MDBBtn> */}
          </MDBCard>
        </MDBContainer>
  );
}

export default Login;
