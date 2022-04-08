import * as APIUtil from '../util/session_api_util';


export const RECEIVE_TEXTS = 'RECEIVE_TEXTS';
export const FETCH_TEXTS = 'FETCH_TEXTS';

export const receiveTexts = texts => ({
    type: RECEIVE_TEXTS,
    texts
  });
  
export const fetchTexts = () => ({
    type: FETCH_TEXTS
  });

// use the api util to connect this to the backend