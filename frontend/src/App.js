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
import Search from "./Components/Search";
import axios from "axios";
import Post from "./Components/Post";
import sample from "./images/sample.jpg";

export default class App extends React.Component {

  render() {
    return (
        <Router>
          <div className="App">
            <nav>
              <Link to="/" className="logo"><h1>RECO</h1></Link>
              <SearchBox  />
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
              <Route path="/search" exact component={Search} />
            </Switch>
          </div>
        </Router>
    );
  }
}
