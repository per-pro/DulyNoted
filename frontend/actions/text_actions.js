import * as APIUtil from '../util/text_api_util';


export const RECEIVE_TEXTS = 'RECEIVE_TEXTS';
export const RECEIVE_TEXT = 'RECEIVE_TEXT';

export const receiveTexts = (texts)=> ({
    type: RECEIVE_TEXTS,
    texts
  });
  
export const receiveText = (text) => ({
    type: RECEIVE_TEXT,
    text
  });
  
export const requestTexts = (query) => (dispatch) => (
      APIUtil.searchTexts(query)
          .then(payload => dispatch(receiveTexts(payload)))
)

export const requestAllTexts = () => (dispatch) => (
  APIUtil.receiveAllTexts()
    .then(payload => dispatch(receiveTexts(payload)))
)


export const requestText = (textId) => (dispatch) => (
    APIUtil.receiveText(textId)
        .then(text => dispatch(receiveText(text)))
)

