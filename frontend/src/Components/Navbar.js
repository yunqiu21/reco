import React from 'react';

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
                    <button className="button" type="button" onClick={this.props.handleSearch}>
                        Search
                    </button>
                    <button className="button" type="button" onClick={this.props.addNewPost}>
                        Upload
                    </button>
                    <button className="button" type="button" onClick={this.props.filter_food}>
                        Food
                    </button>
                    <button className="button" type="button" onClick={this.props.filter_drinks}>
                        Drinks
                    </button>
                </form>
            </div>
        );
    }
}