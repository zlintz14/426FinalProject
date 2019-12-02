import React from "react";

let myStorage = window.localStorage;
let jwt = myStorage.getItem("jwt");
const axios = require("axios");
let userInfo;
let header = `Bearer ${jwt}`;

let getUserInfo = async function() {
  await axios
    .get("http://localhost:3000/account/status", {
      headers: {
        Authorization: "Bearer " + jwt //the token is a variable which holds the token
      }
    })
    .then(response => {
      userInfo = response;
    })
    .catch(e => {
      console.log(e);
    });

  return (
    <div>
      <p>Hello{userInfo.data.user.data}!</p>
    </div>
  );
};
function User(props) {
  return (
    <div>
      <p>Hello User!</p>
    </div>
  );
}

export default User;
