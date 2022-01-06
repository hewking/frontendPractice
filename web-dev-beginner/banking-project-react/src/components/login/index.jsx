import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { sendRequest } from "../../infra/request";

class Login extends Component {
  constructor(props) {
    super(props);

    this.accountInput = React.createRef();
    this.accountRegister = React.createRef();
    this.balance = React.createRef();
    this.currency = React.createRef();
    this.description = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <div id="app" style={{ height: "100%" }}>
        <div className="login-page">
          <div className="login-container">
            <div className="login-title">
              <h1>Banking App</h1>
            </div>
            <div className="login-content">
              <LoginField ref={this.accountInput} onClick={this.login} />
              <div>
                <h2 className="text-center">Register</h2>
                <form>
                  <label htmlFor="username">username (required)</label>
                  <input
                    ref={this.accountRegister}
                    id="username"
                    name="user"
                    type="text"
                    required
                  ></input>
                  <label htmlFor="currency">currency (required)</label>
                  <input
                    ref={this.currency}
                    id="currency"
                    name="currency"
                    type="text"
                    defaultValue="$"
                  ></input>
                  <label ref={this.description} htmlFor="description">
                    description
                  </label>
                  <input
                    id="description"
                    name="description"
                    type="text"
                  ></input>
                  <label htmlFor="balance">balance</label>
                  <input
                    ref={this.balance}
                    id="balance"
                    name="balance"
                    type="number"
                    defaultValue="0"
                  />
                  <button type="button" onClick={this.register}>
                    Register
                  </button>
                </form>
              </div>
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
      console.error(result.error);
      return;
    }

    // const navigate = useNavigate();

    // navigate("/dashboard");

    console.log("startlogin account:", account);
  };

  register = async () => {
    const user = this.accountRegister.current.value;
    const balance = this.balance.current.value;
    const currency = this.currency.current.value;
    const description = this.description.current.value;

    const result = await this.createAccount(
      JSON.stringify({
        user,
        balance,
        currency,
        description,
      })
    );

    if (result.error) {
      alert(result.error);
      return;
    }

    console.log("register result: ", result);
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
      return { error: error.message || "unknown message" };
    }
  }
}

const LoginFieldInner = (props) => {
  const { innerRef, onClick } = props;
  return (
    <div>
      <h2 className="text-center">Login</h2>
      <form id="loginForm">
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="user"
          type="text"
          required
          ref={innerRef}
        ></input>
        <button type="button" onClick={onClick}>
          Login
        </button>
      </form>
    </div>
  );
};

const LoginField = React.forwardRef((props, ref) => (
  <LoginFieldInner innerRef={ref} {...props} />
));

export default Login;
