import React from "react";
import "./Navbar.css";
import logo from "./1113-ai.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-bar-item">
          <div className="logo-div">
            <img src={logo} alt="logo" id="logo" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="/">gallery</a>
              </li>
              <li>
                <a href="/Artists">Artists</a>
              </li>
              <li>
                <a href="/Exhibitions">Exhibitions</a>
              </li>
              <li>
                <a href="/Signup">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
