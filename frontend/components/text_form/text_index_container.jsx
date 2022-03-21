import TextIndex from "./text_index.jsx";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  text: state.entities.tracks[ownProps.match.params.trackId],
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

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextIndex);