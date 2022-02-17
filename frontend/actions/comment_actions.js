import * as APIUtil from '../util/session_api_util';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
  });
  
  export const fetchComments = () => ({
    type: FETCH_COMMENTS,
    
  });