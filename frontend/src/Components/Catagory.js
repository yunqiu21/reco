import React from 'react';
// import SearchBox from './Searchbox';
import Upload from './Upload';
import './Catagory.css';

export default class Catagory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testing: [],
        }
    }

    render() {
        return (
            <div>


                <select className="choose-category" name="Category" id="input-category" onClick={this.props.handleCategory}>
                    <option className="options" value="" hidden>Category</option>
                    <option className="options" value="Food">Food</option>
                    <option className="options" value="Drink">Drink</option>
                    <option className="options" value="Movie">Movie</option>
                    <option className="options" value="Music">Music</option>
                    <option className="options" value="Makeup">Makeup</option>
                    <option className="options" value="Shoe">Shoe</option>
                    <option className="options" value="Other">Other</option>
                </select>
            </div>
        );
    }
}
