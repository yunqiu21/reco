import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"

import Home from "./Home"
import User from "./Components/User"
import Navbar from './Components/Navbar'
import PostList from './Components/PostList';
import SearchBox from './Components/Searchbox'
import Login from './Components/Login'

function App() {
  const handleSearch = () => {
    const posts = this.state.posts;
    console.log(document.getElementById("search-input").value);
    const toSearch = document.getElementById("search-input").value;
    const results = posts.filter(post => post.title.toLowerCase().includes(toSearch.toLowerCase()));
    this.setState({
      postArr: results,
    })
  }
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="logo"><h1>RECO</h1></Link>
          <SearchBox handleSearch={() => handleSearch()} />
          <Navbar />
          <Link to="/user"  className="links">
            My Account
          </Link>
          <Link to="/login"  className="links">
            login
          </Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
