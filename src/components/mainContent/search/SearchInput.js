import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-default">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchInput;
