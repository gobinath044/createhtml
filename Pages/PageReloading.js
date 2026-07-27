import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#282c34",
        padding: "15px"
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "20px",
          textDecoration: "none"
        }}
      >
        Login
      </Link>

      <Link
        to="/about"
        style={{
          color: "white",
          marginRight: "20px",
          textDecoration: "none"
        }}
      >
        User Details
      </Link>

      <Link
        to="/contact"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        Simple
      </Link>
    </nav>
  );
}

export default Navbar;