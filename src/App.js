import React from 'react';
import './App.css';
import sample from './sample.jpg';

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0,
      category: null,
    }
  }
  render() {
    return (
      <div className="post">
        <img
          src={sample}
          alt="testing"
        />
        <p>Sample Picture</p>
      </div>
    )
  }
}

class SearchBox extends React.Component {
  render() {
    return (
      <div className="search" >
        <form className="search-form" onSubmit={this.props.handleSubmit}>
          <input
            className="search-bar"
            type="search"
            placeholder="Type here to search for a topic"
          />
          <button className="search-button" type="submit">
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
      show_foods: true,
      show_drinks: true,
      postArr: []
    }
  }

  renderPosts(arr) {

    let postArr = arr.map((post, index) => {
      return (
        <Post key={index} />
      )
    });
    return <ul>{postArr}</ul>
  }

  addNewPost() {
    // tbd: upload currently add to foods.
    let posts = this.state.foods;
    posts.unshift(Post);
    this.setState({
      posts: posts,
    });
  }

  handleSubmit() {
    alert("searched")
  }

  render() {
    //tbd: currently displays foods.
    return (
      <div>
        <SearchBox
          onClick={() => this.handleSubmit}
        />
        <button className="upload-button" onClick={() => this.addNewPost()} >
          Upload
        </button>
        <button className="upload-button"
          onClick={() => this.setState({ postArr: this.state.foods })} >
          food
        </button>
        <button className="upload-button"
          onClick={() => this.setState({ postArr: this.state.drinks })} >
          drinks
        </button>
        {this.renderPosts(this.state.postArr)}
      </div>
    );
  }
}

export default App;
