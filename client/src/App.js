import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingContainer from "./componenets/landing/landing_container.js"
import './App.css';

function App() {
  return (
    <div id="App">
      <Switch>
        <Route exact path="/" component={LandingContainer} />
      </Switch>
    </div>
  );
}

export default App;
