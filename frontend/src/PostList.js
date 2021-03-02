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
        axios.get("/posts").then(response => this.handleResponse(response));
    };

    handleResponse = (response) => {
        let posts = this.state.posts;
        console.log(posts);
        console.log(response.data);
        response.data.forEach(element => {
            posts = posts.concat(element.title);
        });
        this.setState({
            posts: posts
        })
    }

    render() {
        return (
            <div className="post-list">
                <button onClick={this.handleClick}>Fetch!</button>
                <p>
                    Title of first post: {this.state.posts[0]}
                </p>
            </div>
        )
    }
}