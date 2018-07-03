import React, { Component } from 'react';
import QuoteBox from './quoteBox';
// rendering the quote div. Class component so it has access to store
export default class App extends Component {
  render() {
    return (
      <QuoteBox />
    );
  }
}
