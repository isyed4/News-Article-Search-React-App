import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav>
        <ul>

          <Link to='/'>
          <li>Home</li>
          </Link>

          <Link to='/readinglist'>
          <li>Reading List</li>
          </Link>

          <Link to='/about'>
          <li>About</li>
          </Link>

        </ul>
      </nav>

    )
}


export default Header;