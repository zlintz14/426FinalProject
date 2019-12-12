import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SpotifyBar from './SpotifyBar';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import LineGraph from './LineGraph';
import Goals from './Goals';

let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
const axios = require('axios');

let titleCase = function(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

function User(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  //You'll want to create states for any other properties
  //you receive from the get request
  useEffect(() => {
    axios
      .get('http://localhost:3000/account/status', {
        headers: {
          Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
        }
      })
      .then(response => {
        setFirstName(titleCase(response.data.user.data.firstName));
        setLastName(titleCase(response.data.user.data.lastName));
        //You'll want to set states for any other properties
        //you receive from the get request
      })
      .catch(e => {
        console.log(e);
      });
  }, [firstName]);
  return (
    //   <div></div>
    <div className="mt-0">
      <Navbar />
      <MDBContainer className="text-center  pt-4">
        <br />
        <h2>Welcome back, {firstName + ' ' + lastName}!</h2>
      </MDBContainer>
      <MDBRow>
        <MDBCol className="col-2">
          <Goals />
        </MDBCol>
        <MDBCol className="col-10">
          <LineGraph />
        </MDBCol>
      </MDBRow>
      <SpotifyBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default User;
