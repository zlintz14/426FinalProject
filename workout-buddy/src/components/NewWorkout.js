import React, { Component, useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import LineGraph from './LineGraph';

function NewWorkout() {
  let myStorage = window.localStorage;
  let jwt = myStorage.getItem('jwt');
  const axios = require('axios');

  const [displayed, setDisplayed] = useState(false);
  const [statLabel, setStatLabel] = useState('...');
  const [statValue, setStatValue] = useState(undefined);
  const [dropTitle, setDropTitle] = useState('Choose Workout Type');
  const [errorMessage, setErrorMessage] = useState('');
  const [dropOptions, setDropOptions] = useState([
    'Running',
    'Deadlift',
    'Benchpress',
    'Squat'
  ]);

  let toggle = () => {
    setDisplayed(!displayed);
  };

  let deleteSomething = function() {
    axios.delete('http://localhost:3000/user/stats', {
      headers: {
        Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
      }
    });
  };

  let submitStat = function(e) {
    e.preventDefault();
    console.log('submit stat called');
    // let time = new Date();
    // time = monthToString(time.getMonth()) + ' ' + time.getDate();
    let time = 'Dec 13';
    let type = getType(dropTitle);
    let otherTypes = getOtherTypes(type);
    axios
      .post(
        `http://localhost:3000/user/stats/${type}/${time}`,
        {
          data: [{ statValue }],
          type: 'merge'
        },
        {
          headers: {
            Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
          }
        }
        )
        .then(response => {
          setDisplayed(!displayed);
          LineGraph.forceUpdate();
        // console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

    postOtherTypes(otherTypes, time);
  };

  let getOtherTypes = function(postType) {
    let allTypes = ['deadlifting', 'benching', 'squatting', 'running'];
    let types = allTypes.filter(type => type !== postType);
    return types;
  };

  let getType = function(dropTitle) {
    switch (dropTitle) {
      case 'Deadlift':
        return 'deadlifting';
      case 'Benchpress':
        return 'benching';
      case 'Squat':
        return 'squatting';
      case 'Running':
        return 'running';
    }
  };

  let postOtherTypes = function(otherTypes, time) {
    otherTypes.forEach(otherType => {
      axios
        .post(
          `http://localhost:3000/user/stats/${otherType}/${time}`,
          {
            data: [{ statValue: 0 }],
            type: 'merge'
          },
          {
            headers: {
              Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    });
  };

  let dropdownOptionClicked = function(option) {
    setDropTitle(option);
    setStatLabel(
      option === 'Running' ? 'Distance (miles)' : 'Max Weight (lbs)'
    );
  };
  let monthToString = function(monthNumVal) {
    switch (monthNumVal) {
      case 0:
        return 'Jan';
        break;
      case 1:
        return 'Feb';
        break;
      case 2:
        return 'Mar';
        break;
      case 3:
        return 'Apr';
        break;
      case 4:
        return 'May';
        break;
      case 5:
        return 'Jun';
        break;
      case 6:
        return 'Jul';
        break;
      case 7:
        return 'Aug';
        break;
      case 8:
        return 'Sep';
        break;
      case 9:
        return 'Oct';
        break;
      case 10:
        return 'Nov';
        break;
      case 11:
        return 'Dec';
        break;
    }
  };

  let getDropdown = function() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret className="is-primary-button">
          {dropTitle}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          {dropOptions.map(option => (
            <MDBDropdownItem onClick={dropdownOptionClicked.bind(this, option)}>
              {option}
            </MDBDropdownItem>
          ))}
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  };

  return (
    <MDBContainer>
      <MDBBtn onClick={toggle}className="float-left">Add today's exercise</MDBBtn>
      <MDBBtn className="is-warning-button float-right" onClick={deleteSomething}>
        Clear Entire Stats History
      </MDBBtn>
      <MDBModal isOpen={displayed} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>{getDropdown()}</MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={submitStat}>
            <div className="mx-3">
              <MDBInput
                type="number"
                min="0"
                onChange={e => setStatValue(e.target.value)}
                label={statLabel}
              ></MDBInput>
            </div>
            <MDBBtn
              disabled={dropTitle === 'Choose Workout Type' || !statValue}
              type="submit"
            >
              Submit
            </MDBBtn>
            {errorMessage ? (
              <div className="red-text">{errorMessage}</div>
            ) : (
              false
            )}
          </form>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
}

export default NewWorkout;
