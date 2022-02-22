import SongIndex from "./song_index.jsx";

const mapStateToProps = (state, ownProps) => ({
  song: state.entities.tracks[ownProps.match.params.trackId],
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
  requestSong: (songId) => dispatch(requestSong(songId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);