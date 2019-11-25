import React, { useState } from "react";
import { MDBInput, MDBIcon, MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

function WorkoutSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e)=>{setSearchTerm(e.target.value)}}
          value={searchTerm}
        />
      </MDBFormInline>
      <h1>{searchTerm}</h1>
      <MDBBtn>Search</MDBBtn>
    </MDBCol>
  );
}

export default WorkoutSearch;
