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
import Greeting from "./greeting/greeting";
import Home from "./home/home"
import TextIndex from './text/text_show_container'


const App = () => (
  <div>
    <header>
      <Greeting/>
    </header>
    <main>
      <Switch>
        <Route exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Home}/>
        {/* <Redirect to="/" component={}/> */}
      </Switch>
    </main>
    <br />
  </div>
);

export default App;

// Search bar?
// Bar with featured?
// On genius, log in is a modal