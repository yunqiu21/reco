import React from "react";
import './Login.css'
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogin() {
    console.log("here!");
    let User = {
      "username": document.getElementById("username").value,
      "password": document.getElementById("password").value,
      "signature": "test signature",
    };
    console.log(User);
    axios.post("http://localhost:5000/users/login", User)
      .then(response => {
        console.log(response);
        let info = response.config.data;
        console.log(info);
        localStorage.setItem('userInfo', info)
      });

  }

  render() {
    return (
      <form className="login">
        <input className="login_input" id="username" placeholder="enter username" />
        <input className="login_input" id="password" placeholder="enter password" />
        <button className="Transparant_button" type="button"
          onClick={() => this.handleLogin()}>
          sign in
        </button>
        <a href="/register" className="Transparant_button">register</a>
      </form>
    );
  }
}

export default Login;