import React from 'react';
import Navbar from './Navbar'
import { MDBContainer, MDBIcon, MDBBtn } from 'mdbreact';
import WorkoutSearch from './WorkoutSearch';


let myStorage = window.localStorage;
let jwt = myStorage.getItem("jwt");
const axios = require("axios");

function WorkoutsPage(props) {
    return (
        <div>
            <Navbar />
            <WorkoutSearch />
        </div>
    );
}

export default WorkoutsPage;
