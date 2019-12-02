import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import TitleScreen from "./components/TitleScreen";
import PublicFeatures from "./components/PublicFeatures";
import Login from './components/Login'
import Signup from './components/Signup'
import WorkoutSearch from "./components/WorkoutSearch";
import FullMainPage from './components/FullMainPage'
import User from './components/User'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

const pubRoot = new axios.create({
  baseURL: 'http://localhost:3000/public'
});


function App() {


  function handleClick(){
    // e.preventDefault;
    console.log('handleClick called')
    console.log(arguments[2]);
  }
  const mainPage = <FullMainPage onClick={handleClick}/>;
  const loginPage = <Login/>;
  const signupPage = <Signup/>;
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    // <WorkoutSearch/>
    // mainPage
<Router>
        <Switch>
          <Route exact path="/">
          <FullMainPage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/user">
            <User />
          </Route>

        </Switch>
    </Router>

  );
}


export default App;
