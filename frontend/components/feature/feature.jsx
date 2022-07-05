import React from 'react';
import { Link } from 'react-router-dom';


const Feature = () => {
    const featureGroup = () => (
        <hgroup className="feature-group">
            <div className="button">
                {/* myFunction should ultimately not be a string */}
                <button onClick={"myFunction()"}>FEATURED</button>
            </div>

            <div className="button">
                <button onClick={"myFunction()"}>CHARTS</button>
            </div>

            <div className="button">
                <button onClick={"myFunction()"}>VIDEOS</button>                
            </div>

            <div className="button">
                <button onClick={"myFunction()"}>PROMOTE</button>            
            </div>

            <div className="button">
                <button onClick={"myFunction()"}>FORUMS</button>            
            </div>

            <div className="button">
                <button onClick={"myFunction()"}>ADD A TEXT</button>            
            </div>
        </hgroup>

    )
    return featureGroup();
 };
 
 export default Feature;