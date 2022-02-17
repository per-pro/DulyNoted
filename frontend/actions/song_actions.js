import * as APIUtil from '../util/session_api_util';


export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const FETCH_SONGS = 'FETCH_SONGS';

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
  });
  
  export const fetchSongs = () => ({
    type: FETCH_SONGS,
    
  });