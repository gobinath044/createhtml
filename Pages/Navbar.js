import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/">Login</Link>
        </li>

        <li>
          <Link to="/about">User Details</Link>
        </li>

        <li>
          <Link to="/contact">Simple</Link>
        </li>
        
        <li>
            <Link to="/Service">Service </Link>
         </li>

      </ul>
    </nav>
  );
}

export default Navbar;