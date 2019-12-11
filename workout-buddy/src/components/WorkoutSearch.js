import React, { useState, useEffect, useCallback } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import { Link } from "react-router-dom";

let myStorage = window.localStorage;
const axios = require("axios");
let jwt = myStorage.getItem("jwt");
let tempEventData;
let timeout;

function WorkoutSearch(props) {
  // const [workoutNames, setWorkoutNames] = useState([]);
  // const [types, setTypes] = useState([]);
  // const [days, setDays] = useState([]);
  // const [shortDescriptions, setShortDescriptions] = useState([]);
  // const [longDescriptions, setLongDescriptions] = useState([]);
  // const [readMoreLinks, setReadMoreLinks] = useState([]);
  
  // useEffect(() => {
    
  // })s

  let workoutsObj = {
      "StrongLifts 5x5": {
          "id": 0,
          "type": "strength",
          "days": [1, 3, 5],
          "short-description": "StrongLifts 5x5 is the most popular strengthening program for beginners that is programmed for 3 days a week. This workout relies on compound movements (bench-press, squats, deadlifts, and overhead-press) and is perfect for adapting your body for weight training.",
          "readMoreLink": "https://stronglifts.com/5x5/#gref"
      },
      "Beginner's Running Plan": {
          "id": 1,
          "type": "cardio",
          "days": [1, 2, 4, 5],
          "short-description": "A beginner's running program that eases beginners into running. This is a good workout plan for both runners who have not run in a while and people who have never run before.",
          "readMoreLink": ""
      },
      "Beginner's Boxing Workout": {
          "id": 2,
          "type": "cardio",
          "days": [1, 2, 4, 5],
          "expanded": false,
          "short-description": "This is a basic boxing training plan for beginners, great for people who have never boxed before and for people who have not boxed in a while. This workout focuses on upper body and cardiovascular endurance, working different muscle groups than running.",
          "readMoreLink": ""
      }
  }

  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [list, setList] = useState(Object.keys(workoutsObj));
  const [update, setUpdate] = useState(false);

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
           <MDBCard key={workoutsObj[workout].id} style={{ width: "60%", marginLeft: "20%", marginBottom: "1.5rem", marginTop: "0.75rem" }}>
             <MDBCardBody>
               <MDBCardTitle>{workout}</MDBCardTitle>
               <MDBCardText>
                 {workoutsObj[workout]["short-description"]}
               </MDBCardText>
               <Link to={"workout" + workoutsObj[workout].id}>
                <MDBBtn className="is-primary-button">Read More</MDBBtn>
               </Link>
             </MDBCardBody>
           </MDBCard>
         )}
      </div>
    )
  }

  let searchOnChange = (e) => {
    let searchValue = tempEventData;
    if (searchValue.length === 0) {
      setList(Object.keys(workoutsObj));
      return;
    } else {
      let filteredList = Object.keys(workoutsObj).filter((w) => {
        console.log()
        return w.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      });
      setList(filteredList);
    }
  }

  let debounce = (e) => {
    tempEventData = e.currentTarget.value;      
    clearTimeout(timeout);
    timeout = setTimeout(searchOnChange, 400);
  
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
          <div className="active-pink-4 mb-4">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={debounce}/>
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
