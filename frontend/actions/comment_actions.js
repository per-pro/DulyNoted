import * as APIUtil from '../util/session_api_util';


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const GET_COMMENTS = 'GET_COMMENTS';

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
  });
  
  export const getComments = () => ({
    type: GET_COMMENTS,
    
  });
