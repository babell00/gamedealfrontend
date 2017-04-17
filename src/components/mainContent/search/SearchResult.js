import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {
    render() {
        const mappedGameSearchResult = this.props.gameSearchResults.map((game, index) => <li className="list-group-item" key={index}>game.text</li>);
        return (
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">{mappedGameSearchResult}</ul>
                </div>
            </div>
        );
    }
}

export default SearchResult;
