import React from 'react';
import Upload from './Upload';

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testing: [],
        }
    }

    render() {
        return (
            <div className="search" >
                <form className="search-form">
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Type here to search for a topic"
                    />
                    <button className="search-button" type="button" onClick={this.props.handleSearch}>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}


