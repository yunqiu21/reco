import React from "react";
import sample from '../images/sample.jpg'
import Post from './Post';

export default class PostList extends React.Component {
    renderPosts(arr) {
        const postArr = arr.map((post) => {
            return (
                <Post
                    key={post.id}
                    img={sample}
                    title={post.title}
                    author={post.author}
                    description={post.description}
                    date={post.date}
                    like={post.like}
                />
            )
        });
        return <ul>{postArr}</ul>;

    }

    render() {
        return (
            <div className="post-list">
                <button className="button" onClick={this.props.handleFetch}>Fetch!</button>
                {this.renderPosts(this.props.postArr)}
            </div>
        )
    }
}