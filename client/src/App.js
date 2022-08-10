import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Account from "./pages/Account";
import AuthRoute from "./pages/AuthRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Invite from "./pages/Invite";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ViewGuild from "./pages/ViewGuild";

export default function App() {
  return <BrowserRouter>  
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route exact path="reset-password/:token" component={ResetPassword} />
  </Switch>
</BrowserRouter>;
}

//ALL ROUTES WILL BE SET UP IN THIS FILE.