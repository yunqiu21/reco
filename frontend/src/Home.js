import React from 'react';
import './Home.css';
// import sample from './sample.jpg';
// import Post from './Components/Post'
import PostList from './Components/PostList';
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      foods: [],
      drinks: [],
      showFoods: true,
      showDrinks: true,
      postArr: [],
      searchResult: [],
    }
    this.handleFetch();
  }

  handleFetch = () => {
    axios.get(`/posts`).then(response => this.handleResponse(response));
  };

  handleResponse = (response) => {
    let posts = this.state.posts;
    console.log(posts);
    console.log(response.data);
    const newPosts = response.data.map(element => {
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
    this.setState({
      posts: newPosts,
      postArr: newPosts
    })
  }

  handleLike(i) {
    let newPosts = [...this.state.posts];
    let post = newPosts[i];
    post.like = post.like + 1;

    axios.patch(`/posts/${post.id}`, { "like": post.like })
      .catch(err => console.log(err.response.data));
    this.setState({
      posts: newPosts
    })
  }


  handleSearch() {
    const posts = this.state.posts;
    console.log(document.getElementById("search-input").value);
    const toSearch = document.getElementById("search-input").value;
    const results = posts.filter(post => post.title.toLowerCase().includes(toSearch.toLowerCase()));
    this.setState({
      postArr: results,
    })
  }

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

export default Home;
