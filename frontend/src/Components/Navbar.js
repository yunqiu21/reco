import React from 'react';
// import SearchBox from './Searchbox';
import Upload from './Upload';
import './Navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testing: [],
        }
    }

    render() {
        return (
            <div>

                <Upload />
                <select className="choose-category" name="Category" id="input-category" onClick={this.props.handleCategory}>
                    <option value="" hidden>Category</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Movie">Movie</option>
                    <option value="Music">Music</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Shoe">Shoe</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        );
    }
}