import React from "react";
import './Login.css';
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLogin() {
    let User = {
      "username": document.getElementById("username").value,
      "password": document.getElementById("password").value,
    };
    axios.post("http://localhost:5000/users/login", User)
      .then(response => {
        // console.log(response);
        let info = response.data.data;
        // console.log(info);
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
