import React from "react";
import './Login.css'
import axios from "axios";

class ChangePWD extends React.Component {

  change_pwd() {
    let user = localStorage.getItem('userInfo');
    if (user === null) {
      alert("You are not logged in!")
      return;
    }
    user = JSON.parse(user);
    let new_pwd = document.getElementById("new_pwd").value;
    let User = {
      "username": user.username,
      "password": new_pwd,
      "signature": user.signature,
    };
    axios.patch("http://localhost:5000/users/changePassword/:userID", User);

  }

  render() {
    return (
      <div>
        <input type="password" className="change" id="new_pwd" placeholder="Enter New Password" />
        <button className="button"
          onClick={() => this.change_pwd()}>
          Submit
        </button>
      </div>
    )
  }

}
export default ChangePWD;
