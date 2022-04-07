import React from "react";


class TextIndex extends React.Component {

    constructor (props) {
        super(props);
    } 

    render () {
        return (
            <div>
                <button onClick={this.props.logout}>Log Out</button>
                <li key={text.id}>
                    <Link to={'/texts' + text.id}>
                    </Link>
                </li>
            </div>
            
        )
    }
    
    {/* NB: the empty link causes an error message */}
}

export default TextIndex;