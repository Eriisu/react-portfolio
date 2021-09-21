import "./navbar.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Navbar( { menuOpen, setMenuOpen } ) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">eriisu</a>
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
