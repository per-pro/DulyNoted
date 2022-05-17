import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home-container">
            <div className="news">
                <div id="stretch">
                    <div id="stretch-text">
                        <h2>New Translation of Dante's Purgatorio Incorporates Contemporary Jargon</h2>
                        <h3>Its use of selfies and references to pop culture has the literary world buzzing. </h3>
                        <h4>by Jebediah Brownsworthy</h4>
                    </div>
                    
                    <img id="stretch-image" src="https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2021/11/PURGATORIO-scaled.jpeg?resize=1200%2C1791&quality=100&ssl=1" 
                    height={400}
                    width={300}/>
                </div>
                <div id="cluster">
                    <div id="element">
                        <div id="cluster-text">
                            <h2>The Believer Magazine returns to McSweeney's</h2>
                            {/* <h3>Magazine was previously owned by Paradise media and UNLV</h3> */}
                            <h4>by Adele Delacruz</h4>    
                        </div>
                        <img id="cluster-image" src="https://hyoom.com/wp-content/uploads/2018/05/McSweeneys.jpg"
                        height={400}
                        width={300} />
                    </div>
                    <div id="element">
                        <div id="cluster-text">
                            <h2>The University at Buffalo Receives Federal Grant for Joyce Museum</h2>
                            {/* <h3>Collection includes censored first edition of A Farewell to Arms with vulgarity reinserted by Hemingway</h3> */}
                            <h4>by Adele Delacruz</h4>
                        </div>
                        <img id="cluster-image" src="https://i.pinimg.com/474x/eb/79/74/eb79749d5c350054817f46b8db4fefc5--james-joyce-james-darcy.jpg" 
                        height={400}
                        width={300} />
                    </div>
                    <div id="element">
                        <div id="cluster-text"></div>
                            <h2>German Health Minister Quotes Hegel in Defense of Vaccination</h2>
                            {/* <h3>Lauterbach advocates for mandatory vaccination</h3> */}
                            <h4>by Jebediah Brownworthy</h4>
                        <img id="cluster-image" src="https://i.redd.it/7rmd3cnqzce81.jpg"
                        height={400}
                        width={300} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;