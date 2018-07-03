import { combineReducers } from 'redux';
import QuoteReducer from './reducer_quote';
import AuthorReducer from './reducer_author';
// Generating state from reducers, with defaults for edge cases
const rootReducer = combineReducers({
  quote: QuoteReducer || 'I love riddles!',
  author: AuthorReducer || 'Ron',
});

export default rootReducer;
