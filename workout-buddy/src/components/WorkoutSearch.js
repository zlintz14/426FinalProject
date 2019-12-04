import React, { useState } from "react";
import { MDBInput, MDBIcon, MDBCol, MDBFormInline, MDBBtn } from "mdbreact";


let getWorkouts = async () => {
  let result = await axios({
    method: 'get',
    url: "http://localhost:3000/public/workouts/",
  })
  console.log(result);
  return result;
}

let myStorage = window.localStorage;
const axios = require("axios");
let jwt = myStorage.getItem("jwt");
let done = false;
let workouts;
let result = axios.get("http://localhost:3000/public/workouts/", {
  headers: {
    Authorization: "Bearer " + jwt
  }
}).then(response => {
  workouts = response.data.result[0];
  console.log(workouts);
  done = true;
}).catch(e => {
  alert("There was an issue with pulling workouts. Please notify an administrator.");
});


function WorkoutSearch(props) {
  // let result = getWorkouts();
  // console.log(workouts);
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState(workouts);

  return (
    <div>
      <br/>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">Search Workouts</h2>
          <p className="lead">Search through our list of workouts. Click on them to learn more about each one.</p>
        </div>
      </div>
      <h1></h1>
    </div>
  );
}


export default WorkoutSearch;
