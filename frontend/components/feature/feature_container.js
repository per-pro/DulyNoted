import { connect } from 'react-redux';
import Feature from './featureg';

const mapStateToProps = ({ session, entities }) => {
  console.log(session, entities)
  return {
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feature);