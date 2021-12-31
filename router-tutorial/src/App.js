import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello Router!</h1>
      <nav style={{
        borderbottom: '1px solid',
        paddingbottom: '1rem'
      }}>
      <Link to="/invoices">Invoices</Link> | {""}
      <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
