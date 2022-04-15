import { RECEIVE_COMMENTS } from "../../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    default:
      return state;
  }

  //this is a test
};

export default commentsReducer;