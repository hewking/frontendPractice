import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* 嵌套路由，Expenses, Invoices 作为App 组件的子项，但是需要
          在App 组件中指定一个outlet */}
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
