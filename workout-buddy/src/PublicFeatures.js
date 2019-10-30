import React from 'react';
import './App.scss'
import { MDBRow, MDBCard, MDBCol, MDBBtnGroup, MDBBtn, MDBContainer } from 'mdbreact';
import Testimonials from './Testimonials';
import Workouts from './Workouts';
import PrivateFeatures from './PrivateFeatures';

function PublicFeatures() {
    return (
        <MDBContainer className="FeaturesBackground">
            <MDBRow>
                <MDBCol md="4">
                    <Testimonials />
                </MDBCol>
                <MDBCol md="4">
                    <Workouts />
                </MDBCol>
                <MDBCol md="4">
                    <PrivateFeatures />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}


export default PublicFeatures;