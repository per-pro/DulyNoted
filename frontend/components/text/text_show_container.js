import TextIndex from "./text_index.jsx";
import {connect} from "react-redux";
import {logout} from "../../actions/session_actions";
import { requestText } from "../../actions/text_actions.js";

const mapStateToProps = (state, ownProps) => (
  {
    text: state.entities.texts[ownProps.match.params.textId],
    authors: state.entities.authors,
    comments: Object.values(state.entities.comments).sort((a,b) => {
        if (a.startIndex < b.startIndex) {
            return -1
        } else {
            return 1
        }
    }),
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestText: (textId) => dispatch(requestText(textId)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextIndex);