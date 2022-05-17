import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__layer">
        <div className="header__logo-container">
          <NavLink to="/">
            <h1 className="header__logo">Tanaka Lusengo</h1>
          </NavLink>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <NavLink
                to="/about"
                className={(isActive) =>
                  "header__nav-list-item header__nav-list-item" +
                  (!isActive ? "" : "--active")
                }
              >
                {" "}
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
