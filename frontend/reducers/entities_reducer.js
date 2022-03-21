import { combineReducers } from 'redux';

import userReducer from './users_reducer';
import textsReducer from './texts_reducer';
import commentsReducer from './comments_reducer'

const entitiesReducer = combineReducers({
  users: userReducer,
  texts: textsReducer,
  comments: commentsReducer
});

export default entitiesReducer;