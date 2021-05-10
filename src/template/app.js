import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound.js";
import LoginPage from "./components/login/Login";
import Dashboard from "./screens/dashboard/dashboard";
import "../css/style.css";
import "../css/bootstrap.min.css";
function App(props) {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
