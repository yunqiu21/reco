import React from "react";
import { useState } from 'react';
import "./User.css"
import eric from "../eric.jpg"
//import axios from "axios";

class User extends React.Component{
  constructor(props){
    super(props);
    let user = localStorage.getItem('userInfo');
    user = JSON.parse(user);
    console.log(user)
    if(localStorage.length == 0){
      this.state = {
        username: "you have not logged in yet!",
        signature: "",
      }
    }
    else{
      this.state = {
        username: user.data.username,
        signature: user.data.signature,
      };
    }
  }



  render(){
    return (
      <div className="profile">
        <img src={eric} className="profile_pic" />
        <div className="text">
          <h1 className="username">{this.state.username}</h1>
          <h2>{this.state.signature}</h2>
          <div className="controlPanel">
            <button className="button2">My Posts</button>
            <a className="button2" href="/changesig">change signature</a>
            <button className="button2">edit profile</button>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
