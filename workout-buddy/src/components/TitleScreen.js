import React from "react";
import "../App.scss";
import { MDBBtn } from "mdbreact";
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

function TitleScreen() {
  return (
    <div className="Background">
        {localStorage.getItem("userLoggedIn") === "false" ?
            <div className="Login">
              <Link to="/login">
                <MDBBtn size="lg">Login</MDBBtn>
              </Link>
              <Link to="/signup">
                <MDBBtn size="lg">Signup</MDBBtn>
              </Link>
            </div>
          :
            <div className="Login">
              <Link to="/user">
                <MDBBtn size="lg">User Home</MDBBtn>
              </Link>
              <Link onClick={() => determineSpotifyLogoutAndLogUserOut()}>
                <MDBBtn size="lg">Logout</MDBBtn>
              </Link>
            </div>
        }
      <h1 className="Title">Workout Daddy</h1>
    </div>
  );
}

export default TitleScreen;
