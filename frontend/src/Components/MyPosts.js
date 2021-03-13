import React from 'react';
import PostList from './PostList';
import axios from "axios";

class MyPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postArr: [],
    }
    this.handleFetch();
  }

  handleFetch = () => {
    let user = localStorage.getItem('userInfo');
    if (user === null) {
      alert("You are not logged in!")
      return;
    }
    user = JSON.parse(user);
    const input = { author: user.username}
    console.log(input);

   axios.post("http://localhost:5000/posts/search/author", input)
     .then(response => this.handleResponse(response))
  };

  handleResponse = (response) => {
    console.log(response.data.length);
    let newPosts;
    if (response.data.length === undefined) {
      newPosts = [];
    } else {
      newPosts = response.data.map(element => {
        const post = {
          "id": element._id,
          "author": element.author,
          "title": element.title,
          "description": element.description,
          "date": element.date,
          "like": element.like,
          "category": element.category,
          "imageId": element.imageId
        }
        return post;
      });
    }
    this.setState({
      posts: newPosts,
      postArr: newPosts
    })
  }

  handleLike(i) {}

  render() {
    return (
      <div>
        <PostList handleFetch={() => this.handleFetch()}
          handleLike={(i) => this.handleLike(i)}
          postArr={this.state.postArr} />
      </div>
    );
  }
}

export default MyPosts;
