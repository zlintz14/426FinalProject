import React from "react";
import './App.scss'
import { MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";

function Testimonials() {
  return (
    <MDBContainer>
      <MDBListGroup>
        <MDBListGroupItem>Wow this website is awesome!</MDBListGroupItem>
        <MDBListGroupItem>
          This is great! And I totally wasn't paid to write this!
        </MDBListGroupItem>
        <MDBListGroupItem>
          BEST website I've ever written!...I mean used. -San
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
  );
}

export default Testimonials;
