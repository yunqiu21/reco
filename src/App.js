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
      <div className="search">
        <input
          type="search"
          placeholder="Type here to search for a topic"
        />
      </div>

    )
  }
}

class App extends React.Component {
  renderPost(i) {
    return (
      <Post key={i} />
    )
  }
  render() {
    return (
      <div>
        <SearchBox />
        {this.renderPost(1)}
        {this.renderPost(2)}
        {this.renderPost(3)}
      </div>
    );
  }
}

export default App;
