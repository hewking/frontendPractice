import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  Outlet,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      {/* <Outlet /> */}
    </main>
  );
}

export default App;
