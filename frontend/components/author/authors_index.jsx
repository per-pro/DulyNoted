import React from "react";
import AuthorsIndexItem from "./authors_index_item";
import { Link } from "react-router-dom";


class AuthorsIndex extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.match.params.letter === undefined) {
            this.letter = "All";
        }
        else {
            this.letter = this.props.match.params.letter.toUpperCase()
        }
    }

    componentDidMount() {
        this.props.requestAuthors(this.props.match.params.letter)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.letter != prevProps.match.params.letter) {
            this.props.requestAuthors(this.props.match.params.letter)
            if (this.props.match.params.letter === undefined) {
                this.letter = "All";
            }
            else if (this.props.match.params.letter === 'num') { 
                this.letter = "0 - 9"
            } else {
                this.letter = this.props.match.params.letter.toUpperCase();
            }
        }
    }

    render() {
        if (this.props.authors.order === undefined) return null;
        let authorItems = this.props.authors.order.map(({ id }) => {
            return (
                <AuthorsIndexItem 
                    author={this.props.authors[id]} 
                    key={id} 
                />
            )
        })

        return (
            <div className="gray-out">
                <div className="authors-index-container">
                    <p className='authors-index-breadcrumbs'><Link to='/authors'>Authors</Link> <span className="current-letter">{this.letter}</span></p>

                    <h2 className='authors-index-header'>{this.letter} Authors on Lyrical</h2>
                    <ul className="authors-index">
                        {artistItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AuthorsIndex;