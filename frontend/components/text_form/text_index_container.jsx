import TextIndex from "./text_index.jsx";
import {connect} from "react-redux";
import {logout} from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => (
  {
  text: state.entities.texts[ownProps.match.params.textId],
  artists: state.entities.artists,
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