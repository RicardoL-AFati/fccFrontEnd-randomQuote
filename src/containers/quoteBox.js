import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuote } from '../actions/index';

class QuoteBox extends Component {
  componentDidMount() {
    this.props.getQuote();
  }

  onQuoteClick() {
    this.props.getQuote();
  }

  // onTwitterClick() {
  //   window.open(`https://twitter.com/intent/tweet?text="${this.props.quote}" - ${this.props.author}`);
  // }
  render() {
    const twitterLink = `https://twitter.com/intent/tweet?text="${this.props.quote}" - ${this.props.author}`;
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

function mapStateToProps({ quote, author }) {
 return { quote, author };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuote }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(QuoteBox);