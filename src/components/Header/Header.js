import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__layer">
        <div className="header__logo-container">
          <Link smooth to="#hero">
            <h1 className="header__logo">Tanaka Lusengo</h1>
          </Link>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <Link smooth to="#about" className="header__nav-list-item">
              About
            </Link>

            <Link smooth to="#tech-stack" className="header__nav-list-item ">
              Tech-Stack
            </Link>

            <Link smooth to="#portfolio" className="header__nav-list-item">
              Portfolio
            </Link>

            <Link smooth to="#contact" className="header__nav-list-item">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
