import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    searchButtonPressed() {
        const input = this.state.searchInput;
        if (input.length > 0) {
            this.props.findGame(this.state.searchInput);
        }

    }

    searchTextChanged(e) {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <input onChange={this.searchTextChanged.bind(this)} type="text" className="form-control" />
                    </div>
                    <div className="col-md-1">
                        <button onClick={this.searchButtonPressed.bind(this)} type="submit" className="btn btn-default">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchInput;
