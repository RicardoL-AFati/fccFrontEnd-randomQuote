import { FETCH_QUOTE } from '../actions/index';
/* if action.type is from getQuote -> returns quote from payload.data 
   used for quote property for application state. Else returns state */
export default function (state = '', action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return action.payload.data;
  }
  return state;
}