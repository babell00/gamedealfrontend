import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.css';
import { fetchUser } from '../actions/userAction';
import { fetchTweets } from '../actions/tweetsAction';
import MainContent from './mainContent/MainContent';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  loadTweets() {
    this.props.fetchTweets();
  }

  render() {
    const tweets= this.props.tweets;
    console.log(tweets);
    const mappedTweets = tweets.map(tweet => <li>tweet.text</li>)
    return (
      <div className="App">
        <MainContent />
        <button onClick={this.loadTweets.bind(this)}>load tweets</button>
        <ul>
          {mappedTweets}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(store) {
  return {
    user: store.user.user,
    fetched: store.user.fetched,
    fetching: store.user.fetching,
    error: store.user.error,
    tweets: store.tweets.tweets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: bindActionCreators(fetchUser, dispatch),
    fetchTweets: bindActionCreators(fetchTweets, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
