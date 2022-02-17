import { combineReducers } from 'redux';

import userReducer from './users_reducer';
import songsReducer from './songs_reducer';
import commentsReducer from './comments_reducer'

const entitiesReducer = combineReducers({
  users: userReducer,
  songs: songsReducer,
  comments: commentsReducer
});

export default entitiesReducer;