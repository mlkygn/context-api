import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-dark" data-bs-theme="dark">
      <div className="container">
        <footer className="py-3 my-4">
          <div className="nav justify-content-center border-bottom pb-3 mb-3">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
          <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
