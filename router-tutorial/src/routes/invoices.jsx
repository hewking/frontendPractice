import { getInvoices } from "../data.js";
import {Link} from 'react-router-dom'

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderright: "solid 1px", padding: "1rem" }}>
        {invoices.map((invoice) => {
          return (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/invoices/${invoice.number}`}
              key={invoices.number}
            >
              {invoice.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
