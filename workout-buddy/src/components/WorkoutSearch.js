import React, { useState, useEffect, useCallback } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBAutocomplete, MDBContainer } from 'mdbreact';
import { Link } from "react-router-dom";

let myStorage = window.localStorage;
const axios = require("axios");
let jwt = myStorage.getItem("jwt");
let tempEventData;
let timeout;
let workoutsObj = {};

function WorkoutSearch(props) {

  const [list, setList] = useState();
  useEffect(() => {
    axios.get('http://localhost:3000/private/workouts', {
      headers: {
        Authorization: "Bearer " + jwt
      }
    }).then(res => {
      workoutsObj = res.data.result;
      setList(Object.keys(res.data.result));
    })
  }, []);

    let renderWorkouts = (workouts) => {
      if (workouts.length === 0) {
        return (
          <MDBContainer className="noSearchResultsMessage" style={{ textAlign: "center" }}>
            <p className="blue-grey-text h6">No matches... try broadening your search.</p>
          </MDBContainer>
        )
      }
      return (
        <div>
          {workouts.map((workout) => 
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
          {/* <MDBAutocomplete
            data={list}
            label="Search workouts"
            icon="heart"
            clear
            id="input"
            getValue={this.logValue}
          /> */}
      </MDBContainer>
      </div>
      <div className="workoutview">
        {list ? (<div>{renderWorkouts(list)}</div>) : (<div>Loading...</div>)}
      </div>
    </div>
  );
}


export default WorkoutSearch;