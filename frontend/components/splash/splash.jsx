import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {

    return (
        <div className="splash-container">

            <header>
                <h1 className="splash-top">
                    <Link to="/signup">SIGN UP</Link> <Link to="/login">LOG IN</Link> 
                </h1>
            </header>
                
            <div className="splash-greeting">
                <h2>Welcome to Duly Noted</h2>
                <br />
                <p>Duly Noted lets you annotate your favorite texts and tracks.</p> 
            </div>
        </div>
    )
}

export default Splash;

// refactor this later so that title and sign in are on the same line