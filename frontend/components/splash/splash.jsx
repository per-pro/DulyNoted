import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {

    return (

        <div className="splash-container">
            <div className="splash-greeting">
                <h2>Welcome to Duly Noted</h2>
                <p>Duly Noted lets you annotate your favorite songs and texts</p> 
            </div>
                
            <div className="splash-top">
                <p>
                    <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> to get started!
                </p>
                {/* <p>
                    <Link to="/login">Demo</Link>
                </p> */}
            </div>
        </div>
    )
}

export default Splash;