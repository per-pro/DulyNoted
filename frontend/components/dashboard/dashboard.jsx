import React from "react";
import { Link } from "react-router-dom";
import TextIndex from "../text/text_index";

const Dashboard = () => {

    // what needs to go in this container?
    // 1. button for uploading new text
    // 2. index of my texts
    // 3. update existing texts
    // 4. delete texts
//5.header: convergence? hi melody? miriam libre? passions conflict? quintessential? red rose? shalimar? vesper libre?
//6.body: dotgothic? erica one? secular one? ultra? unlock?
//7.leaning towards h:red rose, b:mix of dotgothic and erica one

    return (
        <div className="ui-container">
            <main>
                <p>
                    Hello, I am text you can only see if you have logged in.
                </p>

                <TextIndex></TextIndex>
            </main>
        </div>
    )
}


export default Dashboard;