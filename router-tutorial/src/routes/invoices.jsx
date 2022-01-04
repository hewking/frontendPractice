import { getInvoices } from "../data.js";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderright: "solid 1px", padding: "1rem" }}>
        {invoices.map((invoice) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/invoices/${invoice.number}`}
              //   列表需要设置key 属性，key 为组件默认属性
              key={invoices.number}
            >
              {invoice.name}
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
}
