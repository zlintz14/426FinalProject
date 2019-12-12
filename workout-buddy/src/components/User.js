import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import SpotifyBar from './SpotifyBar'
import WriteReview from './WriteReview'
import LineGraph from './LineGraph'
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
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
      })
      .catch(e => {
        console.log(e);
      });
  }, [firstName]);
  return (
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
        <MDBCol className="col-8">
          <LineGraph />
        </MDBCol>
      </MDBRow>
      <SpotifyBar />
      <WriteReview />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br/>
      <br/>
      <br/>
      <div id="end">
      </div>
    </div>
  );
}

export default User;
