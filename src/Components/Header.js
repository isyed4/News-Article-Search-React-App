import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {

  const [showMenu, setShowMenu] = useState(true)

  let menu = ''

  if(showMenu){
    menu =  
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
    }


 
  return (
    <nav className="header-nav">

      <a onClick={()=>setShowMenu(!showMenu)} className="toggle-button" href="#"> 
          <FaBars className="bars"/>
      </a>

      {menu}

    </nav>
  );
};

export default Header;
