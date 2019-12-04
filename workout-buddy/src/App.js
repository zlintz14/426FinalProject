import React from "react";
import "./App.scss";
import Login from './components/Login'
import Signup from './components/Signup'
import FullMainPage from './components/FullMainPage'
import User from './components/User'
import WorkoutsPage from './components/WorkoutsPage';
import StrongLiftsPage from './components/Workout Pages/workout0';
import BeginnerRunningPage from './components/Workout Pages/workout1';
import BeginnerBoxingPage from './components/Workout Pages/workout2';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// const pubRoot = new axios.create({
//   baseURL: 'http://localhost:3000/public'
// });


function App() {
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
          <Route path="/workoutspage">
            <WorkoutsPage />
          </Route>
          <Route path="/workout0">
            <StrongLiftsPage />
          </Route>
          <Route path="/workout1">
            <BeginnerRunningPage />
          </Route>
          <Route path="/workout2">
            <BeginnerBoxingPage />
          </Route>

        </Switch>
    </Router>

  );
}


export default App;
