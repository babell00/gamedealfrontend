import React, { Component } from 'react';
import './Search.css';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

class Search extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <h1>Search</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <SearchInput />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <SearchResult />
          </div>
        </div>

      </div>
    );
  }
}

export default Search;
