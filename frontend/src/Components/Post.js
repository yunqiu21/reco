import React from 'react';
import '../index.css';

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            like: 0,
            category: null
        }
    }
    render() {
        return (
            <div className="post">
                <img
                    src={this.props.img}
                    alt="testing">
                </img>
                <h3>{this.props.title}</h3>
                <p>{this.props.author}</p>
                <p>{this.props.description}</p>
                <button className="like-button">
                    <p>Like</p>
                    <p>{this.props.like}</p>
                </button>
            </div>
        )
    }
}