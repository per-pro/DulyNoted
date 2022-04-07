import React from "react";
import TextIndex from "../text/texts_index";


class AuthorShow extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount () {
        this.props.requestAuthor(this.props.match.params.authorId)
    }
    
    componentDidUpdate (prevProps) {
        if (this.props.match.params.authorId != prevProps.match.params.authorId) {
            this.props.requestAuthor(this.props.match.params.authorId)
        }
    }


    render () {
        if (this.props.author === undefined) return null;
        return (
            <div className="author-show">
                <div className="author-info">
                    <img className="author-img" src={this.props.author.imageUrl} alt={this.props.author.name}/>
                    <h2 className="author-name">{this.props.author.name}</h2>
                    <div className="author-description">
                        <h4>About "{this.props.author.name}"</h4>
                        <p className="author-bio">{this.props.author.bio}</p>
                    </div>
                </div>
                <div className="author-texts">
                    <p>POPULAR {this.props.author.name.toUpperCase()} TEXTS</p>
                    <TextIndex texts={this.props.texts} />
                </div>
            </div>
        )
    }
}

export default AuthorShow;