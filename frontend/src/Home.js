import React from 'react';
import './Home.css';
// import sample from './sample.jpg';
// import Post from './Components/Post'
import Navbar from './Components/Navbar'
import PostList from './Components/PostList';
import SearchBox from './Components/Searchbox'
import Navigation from './Components/navigation'
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        "like": element.like
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
      <Router>
        <div>
          <nav>
            <h1>RECO</h1>
            <SearchBox handleSearch={() => this.handleSearch()} />
            <Navbar />
            <Link to="/navigation">
              <button className="button">
                My Account
              </button>
            </Link>
          </nav>

          <PostList handleFetch={() => this.handleFetch()}
            handleLike={(i) => this.handleLike(i)}
            postArr={this.state.postArr} />

          <Switch>
            <Route path="/navigation" Component={Navigation}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
