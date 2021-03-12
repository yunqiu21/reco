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
import ChangeSig from './Components/ChangeSig'
import ChangePWD from './Components/ChangePWD'
import MyPosts from './Components/MyPosts'


function App() {


  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/reco" className="logo"><h1>RECO</h1></Link>
          <Link to="/user" className="account-link">
            My Account
          </Link>
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/register" className="register-link">
            Register
          </Link>
        </nav>
        <Switch>
          <Route path="/reco" exact component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/changesig" component={ChangeSig} />
          <Route path="/changepwd" component={ChangePWD} />
          <Route path="/myposts" component={MyPosts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
