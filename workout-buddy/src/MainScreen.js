import React from 'react';
import './App.scss'
import { MDBBtn } from 'mdbreact';

function MainScreen(){
    return (
     <div className="Background">
        <div className="Login">
            <MDBBtn size="lg">Login</MDBBtn>
            <MDBBtn size="lg">Signup</MDBBtn>
        </div>
         <h1 className="Title">
             Workout Daddy
         </h1>
     </div>   
    )
}

export default MainScreen;