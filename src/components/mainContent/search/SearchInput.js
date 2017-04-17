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

    searchInputKeyPressed(e){
        if(e.key === 'Enter'){
            this.searchAction();
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <input onChange={this.searchInputChanged.bind(this)} onKeyPress={this.searchInputKeyPressed.bind(this)} type="text" className="form-control" />
                    </div>
                    <div className="col-md-1">
                        <button onClick={this.searchAction.bind(this)} type="submit" className="btn btn-default">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchInput;
