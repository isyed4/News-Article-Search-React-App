import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
     <div className='footer'>

        <nav className='footer-nav'>
            <ul>
                <li><a target="_blank" href="https://github.com/isyed4"><FaGithub/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/imransyed-se"><FaLinkedin/></a></li>
                <li>Imran.Syed.h3@gmail.com</li>
            </ul>
        </nav>

    </div>   
        
    )
}

export default Footer;