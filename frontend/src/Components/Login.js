import React from "react";
import './Login.css';
import axios from "axios";

class Login extends React.Component {

  async handleLogin() {
    let User = {
      "username": document.getElementById("username").value,
      "password": document.getElementById("password").value,
    };
    await axios.post("http://localhost:5000/users/login", User)
      .then(response => {
        let info = response.data.data;
        localStorage.setItem('userInfo', JSON.stringify(info))
      }).catch(err => alert("Username and password do not match!"));

  }

  render() {
    return (
      <form className="login">
        <input className="login_input" id="username" placeholder="Enter username" />
        <input type="password" className="login_input" id="password" placeholder="Enter password" />
        <button className="Transparant_button" type="button"
          onClick={() => this.handleLogin()}>
          Sign In
        </button>
        <a href="/register" className="Transparant_button">No Account? Go to Register</a>
      </form>
    );
  }
}

export default Login;
