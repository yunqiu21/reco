import React from 'react';
import './App.css';
import sample from './sample.jpg';
import axios from "axios";
class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0,
      category: null,
    }
  }
  getTitle() {
    return this.state.title;
  }
  render() {
    return (
      <div className="post">
        <p>{this.props.title}</p>
        <img
          src={this.props.url}
          alt="testing"
        />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testing: [],
    }
  }

  render() {
    return (
      <div className="search" >
        <form className="search-form">
          <input
            id="search-input"
            type="search"
            placeholder="Type here to search for a topic"
          />
          <button className="search-button" type="button" onClick={this.props.handleSearch}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

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
    //tbd: currently displays foods.
    return (
      <div>
        <SearchBox handleSearch={() => this.handleSearch()} />
        <button className="upload-button" onClick={() => this.addNewPost("sample", sample, "sample picture")} >
          Upload
        </button>
        <button className="upload-button"
          onClick={() => this.setState({ postArr: this.state.foods })} >
          Food
        </button>
        <button className="upload-button"
          onClick={() => this.setState({ postArr: this.state.drinks })} >
          Drinks
        </button>
        {this.renderPosts(this.state.postArr)}
      </div>
    );
  }
}

export default App;
