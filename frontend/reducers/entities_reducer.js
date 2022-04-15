import { combineReducers } from 'redux';

import userReducer from './components/users_reducer';
import textsReducer from './components/texts_reducer';
import authorsReducer from './components/authors_reducer';
import commentsReducer from './components/comments_reducer'

const entitiesReducer = combineReducers({
  users: userReducer,
  texts: textsReducer,
  authors: authorsReducer,
  comments: commentsReducer
});

export default entitiesReducer;