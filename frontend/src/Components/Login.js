import React, { useState, useEffect } from "react";
import './Login.css';
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentID: ''
    }
  }

  handleLogout() {
    this.setState({
      currentUser: '',
      currentID: ''
    });
    localStorage.clear();
  };

  handleLogin() {
    let user = {
      "username": document.getElementById("log_username").value,
      "password": document.getElementById("log_password").value,
    };
    axios.post("http://localhost:5000/users/login", user)
      .then(response => console.log(response.data));
      
    if (response.data){
      this.setState({
        currentUser: response.data.username,
        currentID: response.data._id
      });
      localStorage.setItem('currentUser', this.state.currentUser ? 'currentUser' : '');
      localStorage.setItem('currentUser', this.state.currentID ? 'currentID' : '');
    }
  };

  render() {
    return (
      <form className="login">
        <input id="log_username" placeholder="enter username" />
        <input id="log_password" placeholder="enter password" />
        <button className="Transparant_button"
          onClick={() => this.handleLogin()}>Sign In</button>
        <a className="Transparant_button" href="/register">Register</a>
      </form>
    );
  }
}

export default Login;
