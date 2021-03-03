import React from 'react';
import './App.css';
import sample from './sample.jpg';
import Post from './Components/Post'
import Navbar from './Components/Navbar'
import axios from "axios";
import PostList from './Components/PostList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: [],
      drinks: [],
      showFoods: true,
      showDrinks: true,
      postArr: [],
      searchResult: [],
    }
  }

  renderPosts(arr) {

    let postArr = arr.map((post, index) => {
      return (
        <Post key={index} title={post.title} url={post.url} description={post.description} />
      )
    });
    return <ul>{postArr}</ul>
  }

  addNewPost(title, url, description) {
    // tbd: upload currently add to foods.
    let posts = this.state.foods;
    posts.unshift({
      title: title,
      url: url,
      description: description,
    });
    this.setState({
      posts: posts,
    });
  }

  handleSearch() {
    const posts = this.state.foods;
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
        <Navbar handleSearch={()=>this.handleSearch()}/>
        <PostList/>
      </div>
    );
  }
}

export default App;
