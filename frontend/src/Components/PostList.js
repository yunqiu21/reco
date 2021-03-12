import React from "react";
import sample from '../images/sample.jpg'
import Post from './Post';

export default class PostList extends React.Component {
    renderPosts(arr) {
        const postArr = arr.map((post, index) => {
            return (
                <Post
                    key={post.id}
                    img={post.imageId === undefined ? sample : `http://localhost:5000/posts/upload/${post.imageId}`}
                    title={post.title}
                    author={post.author}
                    description={post.description}
                    date={post.date}
                    like={post.like}
                    category={post.category}
                    handleLike={() => this.props.handleLike(index)}
                />
            )
        });
        return <ul>{postArr}</ul>;
    }

    render() {
        return (
            <div className="post-list">
                {this.renderPosts(this.props.postArr)}
            </div>
        )
    }
}