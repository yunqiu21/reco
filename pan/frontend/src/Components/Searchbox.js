import React from 'react';
import Search from "./Search";
// import Upload from './Upload';
import {
    Link, Route
} from "react-router-dom";

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testing: [],
        }
    }

    render() {
        return (
            <div>
                <form className="search-form">
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Type here to search for a topic"
                    />
                    <Link to={
                        {pathname: '/search'}
                    } ><button id="search_button" className="button" type="button" >
                        Search
                    </button></Link>

                </form>

            </div>
        );
    }
}
