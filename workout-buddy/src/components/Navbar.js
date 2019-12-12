import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from 'mdbreact';
import { Link } from "react-router-dom";

const determineSpotifyLogoutAndLogUserOut = () => {
    const loggedIn = localStorage.getItem('loggedIn')
    if(loggedIn !== null && loggedIn === "true") {
        const url = 'https://accounts.spotify.com/en/logout'                                                                                                                                                                                                                                                                            
        const spotifyLogoutWindow = window.open(url, '_blank')    
        localStorage.setItem('loggedIn', "false")
    }
    localStorage.setItem("userLoggedIn", "false")
    window.location.href = '/'
}

const Navbar = () => {
    const bgPink = {backgroundColor: '#36454f'};
  return (
      <div>
        <MDBNavbar style={bgPink} fixed="top">
            <div className="NavBarContainer">   
                <MDBNavbarBrand href="/">
                    <strong className="navbaritem">Home Page</strong>
                </MDBNavbarBrand>
                <MDBNavbarBrand href="/user">
                    <strong className="navbaritem">User Home</strong>
                </MDBNavbarBrand>
                <MDBNavbarBrand href="/workoutspage">
                    <strong className="navbaritem">Workouts</strong>
                </MDBNavbarBrand>
            </div>
            <MDBNavbarBrand className="navbaritem" onClick={() => determineSpotifyLogoutAndLogUserOut()}>
                    <strong className="navbaritem">Logout</strong>
            </MDBNavbarBrand>
        </MDBNavbar>
        <div style={{height: "30px"}}>

        </div>
      </div>
    );
}

export default Navbar;