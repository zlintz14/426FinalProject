import React, { Component, useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

function NewWorkout() {
  const [displayed, setDisplayed] = useState(false);
  const [statLabel, setStatLabel] = useState('...');
  const [statValue, setStatValue] = useState(undefined);
  const [dropTitle, setDropTitle] = useState('Choose Workout Type');
  const [errorMessage, setErrorMessage] = useState('');
  const [dropOptions, setDropOptions] = useState([
    'Lifting Weights',
    'Running'
  ]);

  let toggle = () => {
    setDisplayed(!displayed);
  };

  let submitStat = function() {
      setDisplayed(!displayed);
  };

  let dropdownOptionClicked = function(option) {
    setDropTitle(option);
    switch (option) {
      case 'Running':
        setStatLabel('Distance (miles)');
        break;
      case 'Lifting Weights':
        setStatLabel('Max Weight (lbs)');
        break;
    }
  };

  let getDropdown = function() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
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
      <MDBBtn onClick={toggle}>Modal</MDBBtn>
      <MDBModal isOpen={displayed} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>{getDropdown()}</MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={submitStat}>
            <div className="mx-3">
              <MDBInput type="number" min="0" onChange={e=> setStatValue(e.target.value)} label={statLabel}></MDBInput>
            </div>
            <MDBBtn
              disabled={dropTitle === 'Choose Workout Type' || !statValue}
              type="submit"
              onClick={submitStat}
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
