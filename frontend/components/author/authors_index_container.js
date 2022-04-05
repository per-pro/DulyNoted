import { connect } from "react-redux";
import { requestAuthor, requestAuthors } from "../../actions/author_actions";
import AuthorsIndex from "./authors_index";

const mapSTP = (state, ownProps) => ({
    authors: state.entities.authors,

});

const mapDTP = (dispatch, ownProps) => ({
    requestAuthor: (authorId) => dispatch(requestAuthor(authorId)),
    requestAuthors: (letter) => dispatch(requestAuthors(letter)),

});

export default connect(mapSTP, mapDTP)(AuthorsIndex);