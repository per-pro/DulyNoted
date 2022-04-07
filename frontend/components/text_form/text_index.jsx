import React from "react";


class TextIndex extends React.Component {

    constructor (props) {
        super(props);
    } 

    render () {
            let trackTexts = Object.values(this.props.texts).map((text) => {
                return (
                    <div>
                        <button onClick={this.props.logout}>Log Out</button>
                        <li key={text.id}>
                            <Link to={'/texts' + text.id}>
                            </Link>
                        </li>
                    </div>
                    
                )
            })
    }

    return {(
        <ol>
            {trackTexts}
        </ol>
    )}
    
}

export default TextIndex;