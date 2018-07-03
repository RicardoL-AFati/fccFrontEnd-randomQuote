import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuote } from '../actions/index';

class QuoteBox extends Component {
  // Calling action creator on page load once component mounts
  componentDidMount() {
    this.props.getQuote();
  }
  // Fetching new quote action creator on button click
  onQuoteClick() {
    this.props.getQuote();
  }
  // Previous tweet implementation. Changed for FCC
  // onTwitterClick() {
  //   window.open(`https://twitter.com/intent/tweet?text="${this.props.quote}" - ${this.props.author}`);
  // }
  render() {
    // url to tweet current quote and 'author'
    const twitterLink = `https://twitter.com/intent/tweet?text="${this.props.quote}" - ${this.props.author}`;
    // Quote and Author are from state (mapped to props) new-quote calls action creator
    return (
      <div className='border border-primary rounded' id='quote-box'>
        <h6 id='text'><i class="fas fa-quote-left fa-lg"></i>{this.props.quote}<i class="fas fa-quote-right fa-lg"></i></h6>
        <p className='text-muted' id='author'> - {this.props.author}</p>
        <a href={twitterLink}><button className='btn btn-outline-danger' id='tweet-quote'><i class="fab fa-twitter-square fa-2x"></i></button></a>
        <button onClick={this.onQuoteClick.bind(this)} className='btn btn-outline-secondary' id='new-quote'>New Quote</button>
      </div>
    );
  };
}
// State (quote and author properties) is mapped to this containers props
function mapStateToProps({ quote, author }) {
 return { quote, author };
}
// Binding getQuote to dispatch to send action to reducers. Also to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuote }, dispatch);
}
// Creating container by connecting react component to state (redux)
export default connect (mapStateToProps, mapDispatchToProps)(QuoteBox);