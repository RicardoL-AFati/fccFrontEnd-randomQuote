import axios from 'axios';

export const FETCH_QUOTE = 'FETCH_QUOTE';

export function getQuote() {
  const request = axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
  return {
    type: FETCH_QUOTE,
    payload: request,
  };
}
