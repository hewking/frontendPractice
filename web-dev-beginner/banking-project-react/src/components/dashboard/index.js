import { React } from "react";

export default class Dashboard extends React.Component {

  render() {
    return (
      <section class="dashboard-page">
        <header class="dashboard-header">
          <img
            class="dashboard-logo"
            src="logo.svg"
            alt="Squirrel Banking Logo"
          />
          <h1 class="dashboard-title hide-xs">Squirrel Banking</h1>
          <button onClick={this.logout}>Logout</button>
        </header>
        <div class="balance">
          <div>Balance</div>
          <span id="balance"></span>
          <span id="currency"></span>
        </div>
        <div class="dashboard-content">
          <div class="transactions-title">
            <h2 id="description"></h2>
            <button onClilck={this.addTransaction}>Add Transaction</button>
          </div>
        
        </div>
      </section>
    );
  }

  addTransaction = async () => {

  }

  logout = async () => {

  }

}
