import React from 'react';

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            like: 0,
            category: ""
        }
    }
    render() {
        return (
            <div className="post">
                <img
                    src={this.props.url}
                    alt="testing">
                </img>
                <p>{this.props.user}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}