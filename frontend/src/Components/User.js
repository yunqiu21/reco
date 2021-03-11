import React from "react";
import "./User.css"
import eric from "../eric.jpg"
import axios from "axios";

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "Unknown",
    };
    this.getinfo();
  }

  getinfo(){
    axios.get(`http://localhost:5000/users/getuser`).then(
      (response) => {this.handleResponse(response)})
  }

  handleResponse(response){
    let user = response.data;
    console.log(response);
    this.setState({
      username: user,
    });
  }

  render(){
    return (
      <div className="profile">
        <img src={eric} className="profile_pic" />
        <div className="text">
          <h1 className="username">{this.state.username}</h1>
          <h2>I am so tired :(</h2>
          <div className="controlPanel">
            <button className="button2">My Posts</button>
            <button className="button2">My favorites</button>
            <button className="button2">Edit profile </button>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
