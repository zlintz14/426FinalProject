import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBAlert,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBInput
} from 'mdbreact';
import variables from '../App.scss';

function Goals(props) {
  const [goals, setGoals] = useState();
  const [showGoalInput, setShowGoalInput] = useState(false);
  let myStorage = window.localStorage;
  let jwt = myStorage.getItem('jwt');
  const axios = require('axios');

  useEffect(() => {
    axios
      .get('http://localhost:3000/private/goals', {
        headers: {
          Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
        }
      })
      .then(response => {
        setGoals(response.data.result);
        console.log('response', response.data.result);
      });
  }, []);

  let deleteGoal = function(id) {
    console.log(id);
    let tempGoals = [...goals];
    tempGoals.splice(id, 1);
    console.log(tempGoals);
    axios
      .post(
        `http://localhost:3000/private/goals`,
        {
          data: tempGoals
        },
        {
          headers: {
            Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
          }
        }
      )
      .then(() => setGoals(tempGoals));
  };

  let submitNewGoal = function(e,text) {
    console.log('calling submit new')
    e.preventDefault();
    setShowGoalInput(false);
    let tempGoals = [...goals];
    tempGoals.push(text);
    axios
      .post(
        `http://localhost:3000/private/goals`,
        {
          data: tempGoals,
          type: 'merge'
        },
        {
          headers: {
            Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
          }
        }
      )
      .then(() => setGoals(tempGoals));
  };

  let addGoal = function() {
    setShowGoalInput(true);
  };

  return (
    <div>
      {goals ? (
        <MDBContainer>
          <br></br>
          <MDBListGroup>
            <MDBListGroupItem
              style={{ backgroundColor: variables.primary, color: 'white' }}
            >
              Other Users' Goals
              <MDBIcon
                onClick={addGoal}
                icon="plus-circle"
                size="lg"
                className="float-right pt-1 mr-n1 goal-button"
                title="Add New Goal"
              />
            </MDBListGroupItem>
            {showGoalInput ? (
              <form className="mt-0 mb-0 pt-0 pb-0">
                <MDBInput
                  className="mt-0 mb-0"
                  onSubmit={(e) => submitNewGoal.bind(this, e.target.value)}
                  label="Type your goal..."
                ></MDBInput>
              </form>
            ) : (
              false
            )}
            {goals.map((goal, index) => (
              // let boundItemClick = deleteGoal.bind(this, index)
              <MDBListGroupItem>
                {goal}
                <MDBIcon
                  key={index}
                  icon="times-circle"
                  onClick={deleteGoal.bind(this, index)}
                  className="float-right pt-1 goal-delete-button"
                />
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        </MDBContainer>
      ) : (
        false
      )}
    </div>
  );
}

export default Goals;
