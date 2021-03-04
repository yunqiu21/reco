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

function App(){
  return(
    <Router>
      <div className="App">
        <nav>
          <Link to = "/" className="logo"><h1>RECO</h1></Link>
          <SearchBox handleSearch={() => this.handleSearch()} />
          <Navbar />
          <Link to = "/user" ><button className="button">
              My Account
            </button>
          </Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
