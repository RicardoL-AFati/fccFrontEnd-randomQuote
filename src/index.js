import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './containers/app';
import reducers from './reducers';
// Redux promise is used to resolve promise returned from action creator
const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);
// Provider makes store available to all components
ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
, document.querySelector('.container'));
