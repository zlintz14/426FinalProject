import React, { useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';

let myStorage = window.localStorage;
const axios = require("axios");
let jwt = myStorage.getItem("jwt");

function WorkoutSearch(props) {

  let workoutsObj = {
    "StrongLifts 5x5": {
        "type": "strength",
        "days": [1, 3, 5],
        "description": "StrongLifts 5x5 is the most popular strengthening program for beginners that is programmed for 3 days a week. This workout relies on compound movements (bench-press, squats, deadlifts, and overhead-press) and is perfect for adapting your body for weight training.",
        "readMoreLink": "https://stronglifts.com/5x5/#gref"
    },
    "Beginner's Running Plan": {
        "type": "cardio",
        "days": [1, 2, 4, 5],
        "description": "A beginner's running program that eases beginners into running. This is a good workout plan for both runners who have not run in a while and people who have never run before.",
        "readMoreLink": "asdf"
    },
    "Beginner's Boxing Workout": {
        "type": "cardio",
        "days": [1, 2, 4, 5],
        "description": "This is a ",
        "readMoreLink": ""
    }
  }

  let workoutList = Object.keys(workoutsObj);
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState(workoutList);

  let renderWorkouts = (workouts) => {
    if (workouts.list.length === 0) {
      return (
        <MDBContainer className="noSearchResultsMessage" style={{ textAlign: "center" }}>
          <p className="blue-grey-text h6">No matches... try broadening your search.</p>
        </MDBContainer>
      )
    }
    return (
      <div>
        {workouts.list.map((workout) => 
          <MDBCard style={{ width: "60%", marginLeft: "20%", marginBottom: "1.5rem", marginTop: "0.75rem" }}>
            <MDBCardBody>
              <MDBCardTitle>{workout}</MDBCardTitle>
              <MDBCardText>
                {workout.description}
              </MDBCardText>
              <MDBBtn className="is-primary-button">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        )}
      </div>
    )
  }

  let searchOnChange = (e) => {
    let searchValue = e.currentTarget.value;
    if (searchValue.length === 0) {
      setList(Object.keys(workoutsObj));
      return;
    } else {
      let filteredList = list.filter((w) => {
        return w.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      });
      setList(filteredList);
    }
  }

  

  return (
    <div style={{overflowY: "hidden"}}>
      <br/>
      <div className="jumbotron jumbotron-fluid jumbotronTitle">
        <div className="container">
          <h2 className="display-4">Daddy's Workouts</h2>
          <p className="lead">Browse our workouts below, or search for a specific workout in the search bar.</p>
        </div>
        <MDBContainer>
          <div class="active-pink-4 mb-4">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={searchOnChange}/>
          </div>
        </MDBContainer>
      </div>

      <div className="workoutview">
        {renderWorkouts({list})}
      </div>
    </div>
  );
}


export default WorkoutSearch;
