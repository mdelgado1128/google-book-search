import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/about">
        Google book search
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/searchBooks"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search Books
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/savedBooks"
              className={window.location.pathname === "/savedBooks" ? "nav-link active" : "nav-link"}
            >
              Saved Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
