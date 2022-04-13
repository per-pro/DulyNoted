import * as APIUtil from '../util/session_api_util';


export const RECEIVE_TEXTS = 'RECEIVE_TEXTS';
export const RECEIVE_TEXT = 'RECEIVE_TEXT';

export const receiveTexts = (text)=> ({
    type: RECEIVE_TEXTS,
    text
  });
  
export const receiveText = (text) => ({
    type: RECEIVE_TEXT,
    text
  });
  
export const requestTexts = (query) => (dispatch) => (
      TrackAPIUtil.searchTracks(query)
          .then(payload => dispatch(receiveTracks(payload)))
)

export const requestText = (textId) => (dispatch) => (
    TrackAPIUtil.receiveText(textId)
        .then(text => dispatch(receiveText(text)))
)

