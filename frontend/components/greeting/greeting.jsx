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
      <i class="fa-solid fa-thumbtack"></i>
      <button onclick="myFunction()" class="dropbtn">FORUMS</button>
        <div id="myDropdown" class="dropdown-content">
          {/* Notifications should show up if there are any
              Otherwise it should say No Notifications */}
        </div>
      </div>

      <div class="dropdown">
      <i class="fa-solid fa-bolt-lightning"></i>
        <button onclick="myFunction()" class="dropbtn">FEED</button>
        <div id="myDropdown" class="dropdown-content">
          {/* Notifications should show up if there are any
              Otherwise it should say No Notifications */}
        </div>
      </div>  

      <div class="dropdown">
      <i class="fa-solid fa-bell"></i>
        <button onclick="myFunction()" class="dropbtn">ME</button>
        <div id="myDropdown" class="dropdown-content">
          {/* Up and down votes live here
              Marks on annotations also live here */}
        </div>
      </div>  

      <div class="dropdown">
      <i class="fa-solid fa-envelope"></i>
        <button onclick="myFunction()" class="dropbtn">MESSAGES</button>
        <div id="myDropdown" class="dropdown-content">
          {/* In the menu there should be a title: MESSAGES in all caps on the left
              Send a new message    on the right
              The username of the sender, the time it was sent and a preview of the content*/}
        </div>
      </div>

      <div class="dropdown">'
      <i class="fa-solid fa-lightbulb-on"></i>
        <button onclick="myFunction()" class="dropbtn">EARN IQ</button>
        <div id="myDropdown" class="dropdown-content">
          {/* Title: IQ OPPORTUNITIES
              Should show missing [data type] or Unanswered question */}
        </div>
      </div>  

      <div class="dropdown">
        {/* user profile pic should appear here */}
        <button onclick="myFunction()" class="dropbtn">IQ</button>
        <div id="myDropdown" class="dropdown-content">
          {/* ACCOUNT
              View Profile
              Report a Problem
              Sign Out
              Firehose */}
        </div>
      </div>  
    </hgroup>
  );
  console.log(currentUser)
  return currentUser ? personalGreeting() : sessionLinks;
};


export default Greeting;