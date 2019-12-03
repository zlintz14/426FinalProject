import React from "react";
import "../App.scss";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText
} from "mdbreact";
import running from "../images/running.jpg";
import machines from "../images/machines.jpg";
import freeWeights from "../images/freeWeights.jpg";

function Workouts() {
  return (
    <>
      <MDBCard className="WorkoutCard">
        <img src={running} wave></img>
        <MDBCardBody>Running</MDBCardBody>
        <MDBCardText>
          From marathons to intervals, check out our favorite running routines!
        </MDBCardText>
      </MDBCard>
      <MDBCard className="WorkoutCard">
        <MDBCardImage src={machines}></MDBCardImage>
        <MDBCardBody>Machines</MDBCardBody>
        <MDBCardText>Here are our favorite machine workouts!</MDBCardText>
      </MDBCard>
      <MDBCard>
        <MDBCardImage src={freeWeights}></MDBCardImage>
        <MDBCardBody>Free Weights</MDBCardBody>
        <MDBCardText>
          Go here to make like that raw egg you had for breakfast and get
          yolked!
        </MDBCardText>
      </MDBCard>
    </>
  );
}

export default Workouts;
