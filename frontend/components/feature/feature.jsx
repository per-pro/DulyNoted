import React from 'react';
import { Link } from 'react-router-dom';


const Feature = () => {
    const featureGroup = () => {
        <hgroup classname="feature-group">
            <div classname="button">
                <button onclick="myFunction()" className="dropbtn">FEATURED</button>
            </div>

            <div classname="button">
                <button onclick="myFunction()" className="dropbtn">CHARTS</button>
            </div>

            <div classname="button">
                <button onclick="myFunction()" className="dropbtn">VIDEOS</button>                
            </div>

            <div classname="button">
                <button onclick="myFunction()" className="dropbtn">PROMOTE</button>            
            </div>

            <div classname="button">
                <button onclick="myFunction()" className="dropbtn">FORUMS</button>            
            </div>

            <div classname="button">
                <button onclick="myFunction()" className="dropbtn">FORUMS</button>            
            </div>
        </hgroup>
    }
 };
 
 export default Feature;