import CommentIndex from "../comment_index.jsx";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.comment,
  comment: {
      body: '',
      startIndex: ownProps.startIndex,
      endIndex: ownProps.endIndex,
      songId: ownProps.match.params.songId,
  },
  songs: state.entities.songs,
  formType: 'Create',
  selectComment: ownProps.selectComment,
  clearComment: ownProps.clearComment,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);

// this is a test