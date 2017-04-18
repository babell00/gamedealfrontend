import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {
    render() {
        const mappedGameSearchResult = this.props.gameSearchResults.map((game, index) => <li className="list-group-item" key={index}>game.text</li>);
        content = <ul className="list-group">{mappedGameSearchResult}</ul>;
        if(false){
            content = <div className="loader"></div>;
        }
        
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.content}
                </div>
            </div>
        );
    }
}

export default SearchResult;
