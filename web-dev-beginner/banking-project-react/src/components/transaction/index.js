import {React} from React;
import './styles.css';

export default class Transaction extends React.Component {

  render() {
    return (
      <table class="transactions-table" aria-label="Transactions">
      <thead>
        <tr>
          <td>Date</td>
          <td>Object</td>
          <td>Amout</td>
        </tr>
      </thead>
      <tbody id="transactions"></tbody>
    </table>
    );
  }
}