import axios from 'axios';
// Using variables for action type
export const FETCH_QUOTE = 'FETCH_QUOTE';
// action creator - fetches one quote from API
export function getQuote() {
  // will return promise as payload -> resolved by redux-promise before being passed to reducer
  const request = axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
  return {
    type: FETCH_QUOTE,
    payload: request,
  };
}
