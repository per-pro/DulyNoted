import SongIndex from "./song_index.jsx";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);