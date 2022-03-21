import CommentIndex from "../comment_index.jsx";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.comment,
  comment: {
      body: '',
      startIndex: ownProps.startIndex,
      endIndex: ownProps.endIndex,
      textId: ownProps.match.params.textId,
  },
  texts: state.entities.texts,
  formType: 'Create',
  selectComment: ownProps.selectComment,
  clearComment: ownProps.clearComment,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);