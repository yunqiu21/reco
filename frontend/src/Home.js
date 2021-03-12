import React from 'react';
import './Home.css';
import Catagory from './Components/Catagory'
import PostList from './Components/PostList';
import SearchBox from './Components/Searchbox'
import axios from "axios";
import Upload from './Components/Upload';
import Navbar from './Components/Navbar';

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
    axios.get(`http://localhost:5000/posts`).then((response) => this.handleResponse(response));
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

  handleLike(i) {
    let newPosts = [...this.state.posts];
    let post = newPosts[i];
    post.like = post.like + 1;

    axios.patch(`http://localhost:5000/posts/${post.id}`, { "like": post.like })
      .catch(err => console.log(err.response.data));
    this.setState({
      posts: newPosts
    })
  }


  handleSearch = () => {
    // const posts = this.state.posts;
    console.log(document.getElementById("search-input").value);
    const toSearch = { query: document.getElementById("search-input").value };
    axios.post("http://localhost:5000/posts/search", toSearch)
      .then(response => this.handleResponse(response))
  }

  handleCategory = () => {
    console.log(document.getElementById("input-category").value);
    const category = document.getElementById("input-category").value;
    axios.post(`http://localhost:5000/posts/${category}`)
      .then(response => this.handleResponse(response)).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <div className="top-bar"></div>
        <SearchBox handleSearch={() => this.handleSearch()} />
        <Navbar handleCategory={() => this.handleCategory()} />
        <PostList handleFetch={() => this.handleFetch()}
          handleLike={(i) => this.handleLike(i)}
          postArr={this.state.postArr} />
      </div>
    );
  }
}
export default Home;
