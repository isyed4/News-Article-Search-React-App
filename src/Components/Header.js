import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className='header-nav'>
          <ul>

          <Link to='/' className='link-header'>
          <li>Home</li>
          </Link>

          <Link to='/readinglist'className="link-header" >
          <li>Reading List</li>
          </Link>

          <Link to='/about' className="link-header">
          <li>About</li>
          </Link>

          </ul>
      </nav>

    )
}


export default Header;