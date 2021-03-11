import React from "react";
import './Register.css'
import axios from "axios";

class Register extends React.Component{
  constructor(props){
    super(props);
  }

  handleRegistration(){
    let newUser = {
      "username": document.getElementById("reg_username").value,
      "password": document.getElementById("reg_password").value,
      "signature": document.getElementById("reg_signature").value,
    };
    axios.post("http://localhost:5000/users/register", newUser)
      .then(response => console.log(response));
    }

  render(){
    return(
      <form className="register">
        <input className="login_input" id="reg_username" placeholder="enter username"/>
        <input className="login_input" id="reg_password" placeholder="enter password"/>
        <input className="login_input" id="reg_signature" placeholder="enter signature"/>
        <button className="register_button"
           onClick={() => this.handleRegistration()}>
           register
        </button>
      </form>
    );
  }
}

export default Register;
