import React from "react";
import "./User.css"

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout (){
    localStorage.clear();
  }
  
  render() {
    if(localStorage.getItem('currentUser') !== null){
      const userID = localStorage.getItem('currentID');
      axios.get(`http://localhost:5000/users/${userID}`)
      .then(response => this.handleResponse(response)).catch(err => {
        console.log(err);
      })
      return (
        <div className="profile">
          <div className="text">
            <h1 className="username">{response.data.username}</h1>
            <h2>{response.data.signature}</h2>
            <div className="controlPanel">
              <button className="button2">My Posts</button>
              <button className="button2">Edit Profile </button>
              <button className="button2" onClick={() => this.handleLogout()}>
                Sign In</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Please Sign In"></div>
      )
    }
    
  }
}

export default User;
