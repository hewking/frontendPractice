import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello Router!</h1>
      <nav
        style={{
          borderbottom: "1px solid",
          paddingbottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> | {""}
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/* 指定Outlet 作为App 组件router 下的嵌套组件的所需要展示的地方 */}
      <Outlet/>
    </div>
  );
}

export default App;
