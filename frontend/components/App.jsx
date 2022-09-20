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
import TextIndex from './text/text_index_container'
import Feature from "./feature/feature_container"

const App = () => (
  <div>
    <header>
      <Greeting/>
    </header>
    <h2>
      <Feature/>
    </h2>
    <main>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path="/me" component={Dashboard}/>
        <Route exact path="/texts" component={TextIndex}/> 
      </Switch>
    </main>
    <br />
  </div>
);

export default App;

// Features to add:
// Annotation
// Uploading new text
// Search bar
// Fix Buttons and other styling
// On genius, log in is a modal