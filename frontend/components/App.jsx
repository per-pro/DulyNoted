import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Greeting from "./greeting/greeting_container";
import Home from "./home/home"
import Dashboard from "./dashboard/dashboard";
import TextIndex from './text/text_show_container'


const App = () => (
  <div>
    <header>
      <Greeting/>
    </header>
    <main>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path="/me" component={Dashboard}/>
      </Switch>
    </main>
    <br />
  </div>
);

export default App;

// Search bar?
// Bar with featured?
// On genius, log in is a modal