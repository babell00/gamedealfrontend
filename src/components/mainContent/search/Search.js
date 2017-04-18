import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Search.css';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import Loader from './Loader';
import { gameSearch } from '../../../actions/gameSearchAction';

class Search extends Component {
  findGame(title) {
    this.props.gameSearch(title);
  }

  render() {
    const fetching = this.props.fetching;
    var searchResults;

    if (fetching) {
      searchResults = <Loader />
    } else {
      searchResults = <SearchResult gameSearchResults={this.props.games} />;
    }

    return (
      <div className="container">
        <h1 className="text-center">Search</h1>
        <SearchInput findGame={this.findGame.bind(this)} />
        {searchResults}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    games: store.gameSearch.games,
    fetching: store.gameSearch.fetching,
    fetched: store.gameSearch.fetched
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameSearch: bindActionCreators(gameSearch, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
