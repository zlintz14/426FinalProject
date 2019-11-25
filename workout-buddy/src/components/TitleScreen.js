import React from "react";
import "../App.scss";
import { MDBBtn } from "mdbreact";
import Login from "./Login";
import { Link } from "react-router-dom";

function TitleScreen() {
  return (
    <div className="Background">
      <div className="Login">
        <Link to="/login">
          <MDBBtn size="lg">Login</MDBBtn>
        </Link>
        <Link to="/signup">
          <MDBBtn size="lg">Signup</MDBBtn>
        </Link>
      </div>
      <h1 className="Title">Workout Daddy</h1>
    </div>
  );
}

export default TitleScreen;
