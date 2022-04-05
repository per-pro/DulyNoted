import { connect } from "react-redux";
import { requestAuthor } from "../../actions/author_actions";
import AuthorShow from "./author_show";

const mapSTP = (state, ownProps) => {
    return {
        author: state.entities.authors[ownProps.match.params.authorId],
        tracks: state.entities.tracks,
    }

};

const mapDTP = (dispatch, ownProps) => ({
    requestAuthor: (authorId) => dispatch(requestAuthor(authorId)),

});

export default connect(mapSTP, mapDTP)(AuthorShow);