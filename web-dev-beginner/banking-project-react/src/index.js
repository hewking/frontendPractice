import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/login";
import DashBoard from "./components/dashboard";
import { BrowserRouter, Routes,Route  } from "react-router-dom";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={createBrowserHistory()}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PlaceHolder />} />
        </Route>
        <Route path="/dashboard" elements={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

function PlaceHolder() {
  return (
    <mian>
      <p>There's is nothing here'</p>
    </mian>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
