import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {
    render() {
        const mappedGameSearchResult = this.props.gameSearchResults.map((game, index) => <li key={index}>game.text</li>);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul>{mappedGameSearchResult}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResult;
