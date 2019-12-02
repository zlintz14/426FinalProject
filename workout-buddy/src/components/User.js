import React from "react";

let myStorage = window.localStorage;
let jwt = myStorage.getItem("jwt");
console.log(jwt)
const axios = require("axios");
let userInfo;
let header = `Bearer ${jwt}`;
console.log(header);
axios
  .post("http://localhost:3000/account/status", {
    headers: {
        Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
      }
  })
  .then(response => {
    // userInfo = response;
      console.log('logging res')
    console.log(response)
  })
  .catch(e => {
      console.log('logging error')
    console.log(e);
  });
function User(props) {
  return (
    <div>
      <p>Hello!</p>
    </div>
  );
}

export default User;
