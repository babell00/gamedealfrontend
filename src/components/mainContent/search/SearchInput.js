import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    searchAction() {
        const input = this.state.searchInput;
        if (input.length > 0) {
            this.props.findGame(this.state.searchInput);
        }

    }

    searchInputChanged(e) {
        this.setState({ searchInput: e.target.value });
    }

    searchInputKeyPressed(e) {
        if (e.key === 'Enter') {
            this.searchAction();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-sm-10 form-group searchInput">
                    <input 
                    className="form-control" 
                    placeholder="Search..." 
                    onChange={this.searchInputChanged.bind(this)} 
                    onKeyPress={this.searchInputKeyPressed.bind(this)} type="text"/>
                </div>
                <div className="col-md-2 col-sm-2 form-group searchButton">
                    <button onClick={this.searchAction.bind(this)} type="submit" className="btn btn-primary btn-block">Search</button>
                </div>
            </div>
        );
    }
}

export default SearchInput;
