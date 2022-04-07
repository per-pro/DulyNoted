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
                                <div id="author-text-item">
                                    {/* add in something here later for image url */}
                                    <div id="author-text-info">
                                        <p id="author-text-title">{text.title}</p>
                                        <p id="author-text-source">{text.source}</p>
                                    </div>

                                </div>
                            </Link>
                        </li>
                    </div>
                )
            })
    }

    return () {
        <ol>
            {trackTexts}
        </ol>
    }
    
}

export default TextIndex;