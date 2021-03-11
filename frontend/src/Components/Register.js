import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRegistration() {
    let newUser = {
      "username": document.getElementById("reg_username").value,
      "password": document.getElementById("reg_password").value,
      "signature": "test signature",
    };
    axios.post("http://localhost:5000/users/register", newUser)
      .then(response => console.log(response));
  }

  render() {
    return (
      <form className="login">
        <input id="reg_username" placeholder="set username" type="text" />
        <input id="reg_password" placeholder="set password" type="text" />
        <button className="Transparant_button"
          onClick={() => this.handleRegistration()}>
          register</button>
      </form>
    );
  }
}

export default Register;
