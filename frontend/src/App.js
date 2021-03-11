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
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/reco" className="logo"><h1>RECO</h1></Link>
          <Link to="/user" className="links">
            My Account
          </Link>
          <Link to="/login" className="links">
            login
          </Link>
          <Link to="/register" className="links">
            register
          </Link>
        </nav>
        <Switch>
          <Route path="/reco" exact component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
