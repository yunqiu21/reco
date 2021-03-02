import React from 'react';
import './App.css';
import sample from './images/sample.jpg';
import sample_drink from './images/drinks_sample.jpg';
import background from './images/background.jpg'

class Post extends React.Component {
  constructor(props, image_name = sample) {
    super(props)
    this.state = {
      likes: 0,
      category: null,
      url: sample,
      user: "anonymous",
    }
  }
  getTitle() {
    return this.state.title;
  }
  render() {
    return (
      <div className="post">
        <p>{this.state.user}</p>
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
      //foods: [],
      //drinks: [],
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
    let posts = this.state.postArr;
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
    const posts = this.state.postArr;
    console.log(document.getElementById("search-input").value);
    const toSearch = document.getElementById("search-input").value;
    const results = posts.filter(post => post.title.toLowerCase().includes(toSearch.toLowerCase()));
    this.setState({
      postArr: results,
    })
  }

  filter_foods(){

  }

  filter_drinks(){

  }

  render() {
    //tbd: currently displays foods.
    return (
      <div>
        <SearchBox handleSearch={() => this.handleSearch()} />
        <button className="upload-button" onClick={() => this.addNewPost("sample", sample, "sample picture")} >
          Upload
        </button>
        <button className="upload-button">
          Food
        </button>
        <button className="upload-button">
          Drinks
        </button>
        {this.renderPosts(this.state.postArr)}
      </div>
    );
  }
}

export default App;
