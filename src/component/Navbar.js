import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1  id="heading">
          Student Enrollment Form
        </h1>
      </div>
    </>
  );
};

export default Navbar;
