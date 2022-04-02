import React from "react";


class TextIndex extends React.Component {

    constructor (props) {
        super(props);
    } 

    render () {
        return (
            <button onClick={this.props.logout}>Log Out</button>
        )
    }


    // For tomorrow - figure out why my elements are not rendering in the text index.
    // blah


}

export default TextIndex;