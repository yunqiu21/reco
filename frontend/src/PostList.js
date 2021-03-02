import React from "react";
import axios from "axios";

export default class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    handleClick = () => {
        axios.get("/posts").then(response => {
            console.log({ response });
        });
    };

    render() {
        return (
            <div className="post-list">
                <button onClick={this.handleClick}>Fetch!</button>
                <p>
                    List of posts: {this.state.posts}
                </p>
            </div>
        )
    }
}