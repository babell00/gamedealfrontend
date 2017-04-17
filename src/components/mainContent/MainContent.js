import React, { Component } from 'react';
import './MainContent.css';

import Search from './search/Search';

class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <Search />
        </div>
      </div>
    );
  }
}

export default MainContent;
