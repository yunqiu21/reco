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

function SearchBox() {
    return (
      <div className="search">
        <form classname = "search=form">
          <input
          classname = "seach-bar"
          type="search"
          placeholder="Type here to search for a topic"
          />
          <button classname = "search-button" type = "submit">
          search
          </button>
        </form>
      </div>
    );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: [],
      drinks: [],
      show_foods: true,
      show_drinks: true
    }
  }

  renderPosts(catagory) {

    let postArr = catagory.map((post,index) => {
      return (
        <Post key = {index}/>
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

  render() {
    //tbd: currently displays foods.
    let catagory = this.state.foods;
    return (
      <div>
        <SearchBox/>
        <button onClick = {() => this.addNewPost()} >
        Upload
        </button>
        {this.renderPosts(catagory)}
      </div>
    );
  }
}

export default App;
