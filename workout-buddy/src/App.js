import React from "react";
import "./App.scss";
import Login from './components/Login'
import Signup from './components/Signup'
import FullMainPage from './components/FullMainPage'
import User from './components/User'
import Calendar from './components/Calendar';
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
          <Route path="/calendar">
            <Calendar />
          </Route>

        </Switch>
    </Router>

  );
}


export default App;
