import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Search.css';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import { gameSearch } from '../../../actions/gameSearchAction';

class Search extends Component {
  findGame(title) {
    this.props.gameSearch(title);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Search</h1>
        <SearchInput findGame={this.findGame.bind(this)} />
        <SearchResult gameSearchResults={this.props.games} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    games: store.gameSearch.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameSearch: bindActionCreators(gameSearch, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
