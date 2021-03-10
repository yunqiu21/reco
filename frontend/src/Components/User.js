import React from "react";
import "./User.css"
import eric from "../eric.jpg"
import axios from "axios";


function User(props) {
  let username = "Eic";
  axios.get("http://localhost:5000/users/getCurrentUser").then(response => {
      username = response.data.username;
      console.log(username);
  });
  return (
    <div className="profile">
      <img src={eric} className="profile_pic" />
      <div className="text">
        <h1 className="username">{username}</h1>
        <h2>I am so tired :(</h2>
        <div className="controlPanel">
          <button className="button2">My Posts</button>
          <button className="button2">My Favorites</button>
          <button className="button2">Edit Profile </button>
        </div>
      </div>
    </div>

  );
}

export default User;
