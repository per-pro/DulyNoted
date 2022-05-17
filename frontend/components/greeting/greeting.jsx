import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
   const sessionLinks = (
    <nav className="login-signup">      
      <h1 id="title">D&nbsp; U&nbsp; L&nbsp; Y &nbsp;&nbsp;&nbsp; N&nbsp; O&nbsp; T&nbsp; E&nbsp; D</h1>   
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h1 id="title">D&nbsp; U&nbsp; L&nbsp; Y &nbsp;&nbsp;&nbsp; N&nbsp; O&nbsp; T&nbsp; E&nbsp; D</h1>   
      <h1 className="header-name">Hello, {currentUser.username}!</h1>
      <Link to="/">Log Out</Link>
    </hgroup>
  );
  console.log(currentUser)
  return currentUser ? personalGreeting() : sessionLinks;
};


export default Greeting;