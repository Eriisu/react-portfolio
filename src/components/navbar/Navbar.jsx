import "./navbar.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../assets/logo.png";

export default function Navbar( { menuOpen, setMenuOpen } ) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logoActive"> <img src={logo} alt="logoActive" className="logoActive"/> </a>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/eriisu/" class="navbarEmail"><LinkedInIcon className="icon" /></a>
            <a href="https://github.com/eriisu" class="navbarEmail"><GitHubIcon className="icon" /></a>
            <a href="mailto:emjburridge@gmail.com" class="navbarEmail"><MailOutlineIcon className="icon" /></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
