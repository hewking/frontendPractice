import { getInvoices } from "../data.js";
import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";
import QueryNavLink from "../components/queryNavLink.jsx";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderright: "solid 1px", padding: "1rem" }}>
        <input value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value
          if (filter) {
            setSearchParams({ filter });
          } else { 
            setSearchParams({ });
          }
        }}>
        </input>
        {invoices
        .filter(invoice => {
          if (!searchParams.get("filter")) {
            return true;
          }
          return invoice.name.toLowerCase().includes(searchParams.get("filter").toLowerCase());
        })
        .map((invoice) => {
          return (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                }
              }}
              to={`/invoices/${invoice.number}`}
              //   列表需要设置key 属性，key 为组件默认属性
              key={invoices.number}
            >
              {invoice.name}
            </QueryNavLink>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
}
