import React from 'react';
import logo from './logo.svg';
import './App.scss'
import { MDBRow, MDBCard, MDBCol, MDBBtnGroup, MDBBtn } from 'mdbreact';

function MainScreen(){
    return (
     <div className="Background">
         {/* <MDBRow> */}
             {/* <MDBCol size="12"> */}
                 {/* <MDBBtnGroup className="Login"> */}
                 <div className="Login">
                     <MDBBtn size="lg">Login</MDBBtn>
                     <MDBBtn size="lg">Signup</MDBBtn>
                 </div>
                 {/* </MDBBtnGroup> */}
             {/* </MDBCol> */}
         {/* </MDBRow> */}
         <h1 className="Title">
             Workout Daddy
         </h1>
     </div>   
    )
}

export default MainScreen;