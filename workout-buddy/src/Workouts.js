import React from 'react';
import './App.scss'
import { MDBBtn, MDBCard, MDBCardImage, MDBCardBody, MDBCardText } from 'mdbreact';

function Workouts(){
    return(
        <>
        <MDBCard>
            <MDBCardImage src="./machines.jpg"></MDBCardImage>
            <MDBCardBody>Machines</MDBCardBody>
            <MDBCardText>Here are our favorite machine workouts!</MDBCardText>
        </MDBCard>
        <span></span>
         <MDBCard>
         <MDBCardImage src="running.jpg" test></MDBCardImage>
         <MDBCardBody>Running</MDBCardBody>
         <MDBCardText>From marathons to intervals, check out our favorite running routines!</MDBCardText>
     </MDBCard>
        <span></span>
     <MDBCard>
            <MDBCardImage src="freeWeights.jpg"></MDBCardImage>
            <MDBCardBody>Free Weights</MDBCardBody>
            <MDBCardText>Go here to make like that raw egg you had for breakfast and get yolked!</MDBCardText>
        </MDBCard>
        </>
    )
}

export default Workouts;