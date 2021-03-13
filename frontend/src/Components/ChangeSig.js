import React from "react";
import './Login.css'
import axios from "axios";

class ChangeSig extends React.Component {

  changeSig() {
    let user = localStorage.getItem('userInfo');
    if (user === null) {
      alert("You are not logged in!")
      return;
    }
    user = JSON.parse(user);
    let new_sig = document.getElementById("new_sig").value;

    let User = {
      "username": user.username,
      "password": user.password,
      "signature": new_sig,
    };
    axios.patch("http://localhost:5000/users/editSignature/:userID", User);
    localStorage.setItem('userInfo', JSON.stringify(User));
  }

  render() {
    return (
      <div>
        <input className="change" id="new_sig" placeholder="Enter New Signature" />
        <button className="button"
          onClick={() => this.changeSig()}>
          Submit
        </button>
      </div>
    )
  }

}
export default ChangeSig;
