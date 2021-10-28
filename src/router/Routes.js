import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Registrate from "../components/Registrate";

function Routes() {
  return (
    <Router>
      <Switch>

        <Route path="/Registrate" exact={true}>
          <Registrate/>
        </Route>

        <Route path="/Login" exact={true}>
          <Login/>
        </Route>

        <Route path="/" exact={true}>
          <Home/>
        </Route>

      </Switch>
    </Router>
  );
}

export default Routes;
