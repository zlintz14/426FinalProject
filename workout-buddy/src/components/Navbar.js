import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from 'mdbreact';
import { Link } from "react-router-dom";

const Navbar = () => {
    const bgPink = {backgroundColor: '#36454f'};
  return (
      <div>
        <MDBNavbar style={bgPink} fixed="top">
            <MDBNavbarBrand href="/user">
                <strong className="navbaritem">User Home</strong>
            </MDBNavbarBrand>
            <MDBNavbarNav left>
            <Link to="/workoutspage">
                <li className="nav-item">
                    <div className="nav-link"><strong className="navbaritem">Workouts</strong></div>
                </li>            
            </Link>
            </MDBNavbarNav>
            <MDBNavbarNav right>

            </MDBNavbarNav>
        </MDBNavbar>
        <div style={{height: "30px"}}>

        </div>
      </div>
    );
}

export default Navbar;