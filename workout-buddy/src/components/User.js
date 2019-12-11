import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import SpotifyBar from './SpotifyBar'
import {
  MDBContainer,
} from "mdbreact";
import LineGraph from './LineGraph'

let myStorage = window.localStorage;
let jwt = myStorage.getItem("jwt");
const axios = require("axios");

let titleCase = function(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

function User(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //You'll want to create states for any other properties
  //you receive from the get request
  useEffect(() => {
    axios
      .get("http://localhost:3000/account/status", {
        headers: {
          Authorization: "Bearer " + jwt //the token is a variable which holds the token
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
    <div>
      <Navbar />
      <MDBContainer className="text-center mt-5 pt-5">
          <h2>Welcome back, {firstName + " " + lastName}!</h2>
          <br/>
          <h5>
            This is your personal user page. Use the top bar to navigate to your workouts.<br/>
            You can also track and update your workout statistics below!
          </h5>
          <br/>
      </MDBContainer>
<<<<<<< HEAD
      <LineGraph />
=======
      <SpotifyBar />
>>>>>>> spotify-api
    </div>

  );
}

export default User;
