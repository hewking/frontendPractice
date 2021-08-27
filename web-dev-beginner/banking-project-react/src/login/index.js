import React, { Component } from "react";
import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-title">
            <h1>Banking App</h1>
          </div>
          <div className="login-content">
            <h2>Login</h2>
            <form id="loginForm">
              <label for="username">username</label>
              <input id="username" name="user" type="text" required></input>
              <button onClick={this.login}>Login</button>
            </form>
            <div>
              <h2>Register</h2>
              <form>
                <label for="username">username (required)</label>
                <input id="username" name="user" type="text" required></input>
                <label for="currency">currency (required)</label>
                <input
                  id="currency"
                  name="currency"
                  type="text"
                  value="$"
                ></input>
                <label for="description">description</label>
                <input id="description" name="description" type="text"></input>
                <label for="balance">balance</label>
                <input
                  id="balance"
                  name="balance"
                  type="number"
                  value="0"
                ></input>
                <button>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  login = async () => {
    const form = document.getElementById('loginForm'); 
    const account = form.user.value;
    
    console.log("startlogin");
  };
}

export default Login;
