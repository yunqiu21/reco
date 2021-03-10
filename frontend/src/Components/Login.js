import React from "react";
import './Login.css'
import axios from "axios";

class Login extends React.Component {

  setUser = (username) => {
    axios.patch("http://localhost:5000/users/login", { username: username })
  }
  render() {
    return (
      <form className="login">
        <input className="login_input" id="username" placeholder="enter username" />
        <input className="login_input" id="password" placeholder="enter password" />
        <button className="Transparant_button"
          onClick={() => this.setUser(document.getElementById("username").value)}>Sign In</button>
        <a className="Transparant_button" href="/register">Register</a>
      </form>
    );
  }
}

export default Login;
