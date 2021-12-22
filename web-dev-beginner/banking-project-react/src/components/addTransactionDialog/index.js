import { Component } from "react";
import "./styles.css";

export default class AddTrasnactionDialog extends Component {
  render() {
    return (
      <section id="transactionDialog" class="dialog">
        <div class="dialog-content">
          <h2 class="text-center">Add Transaction</h2>
          <form id="addTransactionForm" action="javascript:addTransaction()">
            <label for="addDate">Date</label>
            <input id="addDate" name="date" type="date" required />
            <label for="addObject">Object</label>
            <input id="addObject" name="object" type="text" maxlength="20" />
            <label for="addAmount">Amount</label>
            <input id="addAmount" name="amount" type="number" required />
            <div id="addTransactionError" role="alert"></div>
            <div class="dialog-buttons">
              <button
                type="button"
                class="button-alt"
                onclick="cancelTransaction()"
                formnovalidate
              >
                Cancel
              </button>
              <button formaction="javascript:confirmTransaction()">Add</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
