import React from "react";
import "./User.css"

function User(props) {

  return (
    <div className="profile">
      <div className="text">
        <h1 className="username">Eric Fang</h1>
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
