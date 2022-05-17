import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home-container">

                
            <div className="news">
                <div className="news">
                    <h2>New Translation of Dante's Purgatorio Incorporates Contemporary Jargon</h2>
                    <h3>Its use of selfies and references to pop culture has the literary world buzzing. </h3>
                    <img src="https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2021/11/PURGATORIO-scaled.jpeg?resize=1200%2C1791&quality=100&ssl=1" 
                    height={400}
                    width={300}/>
                </div>
                <div className="news">
                    <h2>The Believer Magazine returns to McSweeney's</h2>
                    <h3>Magazine was previously owned by Paradise media and UNLV</h3>
                    <img src="https://hyoom.com/wp-content/uploads/2018/05/McSweeneys.jpg"
                    height={400}
                    width={300} />
                </div>
                <div className="news">

                </div>
            </div>
        </div>
    )
}

export default Home;

// refactor this later so that title and sign in are on the same line