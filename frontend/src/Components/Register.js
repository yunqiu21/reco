import React from "react";
import './Register.css'
import './Login.css'
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRegistration() {
    let newUser = {
      "username": document.getElementById("reg_username").value,
      "password": document.getElementById("reg_password").value,
      "signature": document.getElementById("reg_signature").value,
    };
    axios.post("http://localhost:5000/users/register", newUser)
      .catch(() => alert("Username exists!"));
  }

  render() {
    return (
      <form className="register">
        <input className="login_input" id="reg_username" placeholder="Enter username" />
        <input type="password" className="login_input" id="reg_password" placeholder="Enter password" />
        <input className="login_input" id="reg_signature" placeholder="Enter signature" />
        <button className="register_button" type="button"
          onClick={() => this.handleRegistration()}>
          Register
        </button>
      </form>
    );
  }
}

export default Register;
