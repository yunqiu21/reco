import React from "react";
import './Login.css'
import axios from "axios";

class ChangeSig extends React.Component{
  constructor(props){
    super(props);
  }

  changeSig(){
    let user = localStorage.getItem('userInfo');
    user = JSON.parse(user);
    let new_sig = document.getElementById("new_sig").value;

    let User = {
      "username": user.username,
      "password": user.password,
      "signature": new_sig,
    };
    axios.patch("http://localhost:5000/users/editSignature/:userID", User)
    .then(response => {
       // let info = response.data;
       // localStorage.setItem('userInfo', JSON.stringify(info))
    });
    localStorage.setItem('userInfo', JSON.stringify(User));
  }

  render(){
    return(
      <div>
        <input className="change" id="new_sig" placeholder="Enter New Signature"/>
        <button className="button"
          onClick={() => this.changeSig()}>
          submit
        </button>
      </div>
    )
  }

}
  export default ChangeSig ;
