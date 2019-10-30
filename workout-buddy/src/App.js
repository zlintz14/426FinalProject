import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MainScreen from "./MainScreen";
import PublicFeatures from "./PublicFeatures";

function App() {
  return (
    <div className="App">
      <MainScreen className="Background"/>
      <PublicFeatures className="FeaturesBackground"/>
    </div>
  );
}

export default App;
