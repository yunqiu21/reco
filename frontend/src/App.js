import React from 'react';
import './App.css';
// import sample from './sample.jpg';
// import Post from './Components/Post'
import Navbar from './Components/Navbar'
import PostList from './Components/PostList';
import SearchBox from './Components/Searchbox'
import axios from "axios";


class App extends React.Component {
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
  }

  handleFetch = () => {
    axios.get("/posts").then(response => this.handleResponse(response));
  };

  handleResponse = (response) => {
    let posts = this.state.posts;
    console.log(posts);
    console.log(response.data);
    const newPosts = response.data.map(element => {
      const postID = element._id;
      const postAuthor = element.author;
      const postTitle = element.title;
      const postDescription = element.description;
      const postDate = element.date;
      const postLike = element.like;
      const post = {
        "id": postID,
        "author": postAuthor,
        "title": postTitle,
        "description": postDescription,
        "date": postDate,
        "like": postLike
      }
      return post;
    });
    this.setState({
      posts: newPosts,
      postArr: newPosts
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
        <SearchBox handleSearch={() => this.handleSearch()} />
        <Navbar />
        <PostList handleFetch={() => this.handleFetch()}
          postArr={this.state.postArr} />
      </div>
    );
  }
}

export default App;
