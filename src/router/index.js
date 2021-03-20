import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/home'
import './index.css'
import Success from '../pages/success'
import Dashboard from '../pages/dashboard'
import Profile from '../pages/user/profile'
import Reset from '../pages/user/reset_password'
export default function App() {
  return (
   
    <Router>
        <div className="header__navBar">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
        <div className="main-container">
            <Switch>
                <Route path="/success">
                  <Success />
                </Route>
                <Route path="/reset">
                  <Reset />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/register">
                <Register />
                </Route>
                <Route path="/login">
                <Login />
                </Route>
                <Route path="/">
                <Home />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}
