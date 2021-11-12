import React from "react";
// import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Home from "../components/Home";
import Comics from "../components/Comics";
import Form from "../components/Form";

function Routes(props) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/Registrate" exact={true}>
        {props.userGlobal ? <Redirect to="/Login"/> : <Form isRegister={true} />}
        </Route>

        <Route path="/Comics" exact={true}>
          {props.userGlobal ? <Comics/> : <Redirect to="/" />}
        </Route>

        <Route path="/Login" exact={true}>
          {props.userGlobal ? <Redirect to="/Comics"/> : <Form isRegister={false}/>}
        </Route>

        <Route path="/" exact={true}>
          {props.userGlobal ? < Comics/> : <Home />}
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Routes;
