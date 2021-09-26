import "./navbar.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import logoBlack from "../../assets/logo_black.png";
import logoWhite from "../../assets/logo_white.png";

export default function Navbar( { menuOpen, setMenuOpen } ) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> <img src={logoBlack} alt="logo" className="logo"/> </a>
          <a href="#intro" className="logoActive"> <img src={logoWhite} alt="logoActive" className="logoActive"/> </a>
          <div className="itemContainer">
            <MailOutlineIcon className="icon"/>
            <span>emjburridge@gmail.com</span>
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
