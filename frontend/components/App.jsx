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
import SongIndexContainer from './song_form/song_index_container'


const App = () => (
  <div>
    <header>
            <h1 id="header">D u l y  N o t e d</h1>   
    </header>
    <main>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={Splash}/>
        <ProtectedRoute exact path="/" component={SongIndexContainer}/>
    </main>
    <br />
  </div>
);

export default App;

//Note - on genius, log in is a modal