import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import DashBoard from "./components/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { browserHistory } from "react-router";

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Routes path="/">
        <Route index elements={<Login />} />
        <Route path="dashboard" elements={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
