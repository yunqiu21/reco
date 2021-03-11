import React from "react";
import './Login.css'
import axios from "axios";

class ChangePWD extends React.Component{
  constructor(props){
    super(props);
  }

  change_pwd(){
    let user = localStorage.getItem('userInfo');
    user = JSON.parse(user);
    let new_pwd = document.getElementById("new_pwd").value;
    let User = {
      "username": user.username,
      "password": new_pwd,
      "signature": user.signature,
    };
    axios.patch("http://localhost:5000/users/changePassword/:userID", User)
    .then(response => {
       // let info = response.data;
       // localStorage.setItem('userInfo', JSON.stringify(info))
    });
  //  localStorage.setItem('userInfo', JSON.stringify(User));
  }

  render(){
    return(
      <div>
        <input className="login_input" id="new_pwd" placeholder="enter new password"/>
        <button className="button"
          onClick={() => this.change_pwd()}>
          submit
        </button>
      </div>
    )
  }

}
  export default ChangePWD ;
