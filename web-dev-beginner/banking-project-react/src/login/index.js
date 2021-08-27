import React, { Component } from "react";
import "./styles.css";
import {sendRequest} from "../infra/request";

class Login extends Component {
  constructor(props) {
    super(props);

    this.accountInput = React.createRef();
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
              <input
                id="username"
                name="user"
                type="text"
                required
                ref={this.accountInput}
              ></input>
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
    const account = this.accountInput.current.value;
    const result = await this.getAccount(account);
    if (result.error) {
      alert(result.error);
      return;
    }
    console.log("startlogin account:", account);
  };

  createAccount = async (account) => {
    try {
      const result = await sendRequest("/accounts", "POST", account);
      return result;
    } catch (e) {
      return { error: e.message || "unkown error" };
    }
  };

 async getAccount(user) {
    try {
      const data = sendRequest("/accounts/" + encodeURIComponent(user));
      return data;
    } catch (error) {
      return {error: error.message || 'unknown message'};
    }
  }

}

export default Login;
