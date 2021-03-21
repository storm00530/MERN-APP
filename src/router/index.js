import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import Success from "../pages/success";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/user/profile";
import Reset from "../pages/user/reset_password";
import Header from "../components/header";
import Auth from "../hoc/auth";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Switch>
          <Route exact path="/success" component={Auth(Success, null)} />
          <Route exact path="/reset" component={Auth(Reset, true)} />
          <Route exact path="/profile" component={Auth(Profile, true)} />
          <Route exact path="/dashboard" component={Auth(Dashboard, true)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/logout" component={Auth(Login, true)} />
          <Route exact path="/" component={Auth(Home, null)} />
        </Switch>
      </div>
    </Router>
  );
}
