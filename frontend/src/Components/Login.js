import React from "react";
import './Login.css'

class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form className="login">
        <input className="login_input" id="username" placeholder="enter username"/>
        <input className="login_input" id="password" placeholder="enter password"/>
        <button className="Transparant_button">sign in</button>
        <a className="Transparant_button" href="/register">register</a>
      </form>
    );
  }
}

export default Login;
