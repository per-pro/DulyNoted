import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Greeting from "./greeting/greeting";


const App = () => (
  <div>
    <header>
        {/* <Link to="/" className="header-link"> */}
            <h1>Annotatify</h1>   
        {/* </Link> */}
        <GreetingContainer />
    </header>
    <main>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </main>
  </div>
);

export default App;