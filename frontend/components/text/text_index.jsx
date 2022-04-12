import React from "react";
import { Link } from "react-router-dom";


class TextIndex extends React.Component {

    constructor (props) {
        super(props);
    } 

    // First step - seed the db

    componentDidMount() {
        console.log("hello")
        this.props.requestText(1)
    }

    render() {
            console.log(this.props)
            // let trackTexts = Object.values(this.props.text).map((text) => {
                return (
                    <div>
                        <button onClick={this.props.logout}>Log Out</button>
                        {/* <li key={text.id}> */}
                            {/* <Link to={'/texts' + text.id}> */}
                                {/* <div id="author-text-item"> */}
                                    {/* add in something here later for image url */}
                                    {/* <div id="author-text-info"> */}
                                        {/* <p id="author-text-title">{text.title}</p> */}
                                        {/* <p id="author-text-source">{text.source}</p> */}
                                    {/* </div> */}

                                {/* </div> */}
                            {/* </Link> */}
                        {/* </li> */}
                    </div>
                )
            // })

            return ( 
                <ol>
                    {trackTexts}
                </ol>
            )
    }

    
}

export default TextIndex;