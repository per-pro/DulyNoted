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
      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">FORUMS</button>
        <div id="myDropdown" class="dropdown-content">
          <p>Notifications</p>
        </div>
      </div>

      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">FEED</button>
        <div id="myDropdown" class="dropdown-content">
          <p>Notifications</p>
        </div>
      </div>  

      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">ME</button>
        <div id="myDropdown" class="dropdown-content">
          {/* Up and down votes go here */}
        </div>
      </div>  

      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">MESSAGES</button>
        <div id="myDropdown" class="dropdown-content">
          {/* messages go here */}
        </div>
      </div>

      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">EARN IQ</button>
        <div id="myDropdown" class="dropdown-content">
          {/* unanswered questions go here */}
        </div>
      </div>  

      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">IQ</button>
        <div id="myDropdown" class="dropdown-content">
          {/* ACCOUNT
              View Profile
              Report a Problem
              Sign Out
              Firehose */}
        </div>
      </div>  
      {/* <button onClick={logout}>Logout</button>  refactor so that logout is in a drop down menu */}
    </hgroup>
  );
  console.log(currentUser)
  return currentUser ? personalGreeting() : sessionLinks;
};


export default Greeting;