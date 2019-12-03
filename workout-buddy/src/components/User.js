import React, { useState, useEffect } from "react";

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
    console.log("use effect called");
    axios
      .get("http://localhost:3000/account/status", {
        headers: {
          Authorization: "Bearer " + jwt //the token is a variable which holds the token
        }
      })
      .then(response => {
        console.log(response);
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
    <div>{<p>Hello {firstName + " " + lastName}!</p>}</div>
  );
}

export default User;
