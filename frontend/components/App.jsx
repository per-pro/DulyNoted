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
import Splash from './splash/splash'
import TextIndexContainer from './text_form/text_index_container'


const App = () => (
  <div>
    <header>
            <h1 id="header">D&nbsp; U&nbsp; L&nbsp; Y &nbsp;&nbsp;&nbsp; N&nbsp; O&nbsp; T&nbsp; E&nbsp; D</h1>   
    </header>
    <main>
      <Switch>
        <AuthRoute exact path="/" component={Splash}/>
        <ProtectedRoute exact path="/" component={TextIndexContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
      </Switch>
    </main>
    <br />
  </div>
);

export default App;

//Note - on genius, log in is a modal