import React from "react";
import './Login.css';
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleLogin() {
  //   let User = {
  //     "username": document.getElementById("username").value,
  //     "password": document.getElementById("password").value,
  //     "signature": "test signature",
  //   };
  //   console.log(User);
  //   axios.post("http://localhost:5000/users/login", User)
  //     .then(response => {
  //       let info = response.config.data;
  //       console.log(info);
  //       localStorage.setItem('userInfo', info)
  //     });
  // }

  handleLogin(){
    let User = {
      "username": document.getElementById("username").value,
      "password": document.getElementById("password").value,
      "signature": "test signature",
    };
    axios.post("http://localhost:5000/users/login", User)
      .then(response => {
        let info = response.data.data;
        console.log(info);
        localStorage.setItem('userInfo', JSON.stringify(info))
      });

    }

  render(){
    return(
      <form className="login">
        <input className="login_input" id="username" placeholder="enter username"/>
        <input className="login_input" id="password" placeholder="enter password"/>
        <button className="Transparant_button"
          onClick={() => this.handleLogin()}>
          sign in
        </button>
        <a href = "/register" className="Transparant_button">register</a>
      </form>
    );
  }
}

export default Login;
