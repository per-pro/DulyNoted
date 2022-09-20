import React from "react";
import { Link } from "react-router-dom";


class TextIndex extends React.Component {

    constructor (props) {
        super(props);
    } 

    componentDidMount() {
        this.props.requestAllTexts()
    }

    render() {
        if (this.props.texts === undefined) return null
        let texts = Object.values(this.props.texts)
        return (
            <div>
              {
              texts.map(text => {
                    <div>
                        {text.title}
                    </div> 
                })
            }
            </div>
        )
        //     let trackTexts = Object.values(this.props.text).map((text) => {
        //         return (
        //             <div>
        //                 <button onClick={this.props.logout}>Log Out</button>
        //                 <li key={text.id}>
        //                     <Link to={'/texts' + text.id}>
        //                         <div id="author-text-item">
        //                             {/* add in something here later for image url */}
        //                             <div id="author-text-info">
        //                                 <p id="author-text-title">{text.title}</p>
        //                                 <p id="author-text-source">{text.source}</p>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 </li>
                    
        //             <ol>
        //                 {trackTexts}
        //             </ol>
        //             </div>
        //         )
        // })
 
    }
}

export default TextIndex;