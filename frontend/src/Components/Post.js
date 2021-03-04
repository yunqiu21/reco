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
    handleLike() {
        const like = this.state.like;
        this.setState({ like: like + 1 });
    }
    render() {
        return (
            <div className="post">
                <img
                    src={this.props.img}
                    alt="testing">
                </img>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <span className="author">{this.props.author}</span>
                <div className="like-container">
                    <button className="like-button" onClick={(i) => this.props.handleLike(i)}>
                        Like!
                    </button>
                    <span>{this.props.like}</span>
                </div>
            </div>
        )
    }
}