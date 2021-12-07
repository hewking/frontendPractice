import {React} from React;
import {connect} from 'react-redux';

export default class Transaction extends React.Component {

  render() {
    return (
      <div>
        <h2>Transaction</h2>
        <p>
          <strong>Date:</strong> {this.props.transaction.date}<br/>
          <strong>Amount:</strong> {this.props.transaction.amount}<br/>
          <strong>Description:</strong> {this.props.transaction.description}<br/>
        </p>
      </div>
    );
  }
}