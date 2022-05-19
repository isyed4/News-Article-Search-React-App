import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {



 const handleClickNav = () => {
   console.log('hello');
 }
 
  return (
    <nav className="header-nav">

      <a onClick={handleClickNav} id="toggle-button" href="#">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <ul>
        <Link to="/" className="link-header">
          <li>Home</li>
        </Link>

        <Link to="/readinglist" className="link-header">
          <li>Reading List</li>
        </Link>

        <Link to="/about" className="link-header">
          <li>About</li>
        </Link>
      </ul>

    </nav>
  );
};

export default Header;
