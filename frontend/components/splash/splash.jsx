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
                <p>Duly Noted lets you annotate your favorite songs and texts</p> 
            </div>
        </div>
    )
}

export default Splash;