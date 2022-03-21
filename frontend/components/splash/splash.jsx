import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {

    return (

        <div className="splash-container">
            <div className="splash-top">
                    <Link to="/login">LOG IN</Link> <Link to="/signup">SIGN UP</Link>
            </div>

            <div className="splash-greeting">
                <h2>Welcome to Duly Noted</h2>
                <br />
                <p>Duly Noted lets you annotate your favorite texts and tracks</p> 
            </div>
        </div>
    )
}

export default Splash;

// refactor this later so that title and sign in are on the same line