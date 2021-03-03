import React from 'react';
import SearchBox from './Searchbox';
import Upload from './Upload';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testing: [],
        }
    }

    render() {
        return (
            <div className="search" >
                <SearchBox handleSearch={() => this.props.handleSearch()} />
                <Upload />
                <button className="button" type="button" onClick={this.props.filter_food}>
                    Food
                    </button>
                <button className="button" type="button" onClick={this.props.filter_drinks}>
                    Drinks
                    </button>
            </div>
        );
    }
}