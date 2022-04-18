import { RECEIVE_TEXTS } from "../../actions/text_actions";

const textsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEXTS:
      return action.texts;
    default:
      return state;
  }
};

export default textsReducer;