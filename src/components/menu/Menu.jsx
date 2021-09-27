import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <div className="linksWrapper">

      <ul>
        <div className="navHome">
          <li className="navHome" onClick={() => setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>
        </div>
        <div className="navPortfolio">
          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio" className="navPortfolio">Portfolio</a>
          </li>
        </div>
        <div className="navWorks">
          <li onClick={() => setMenuOpen(false)}>
            <a href="#works" className="navWorks">Works</a>
          </li>
        </div>
        <div className="navTestimonials">
          <li onClick={() => setMenuOpen(false)}>
            <a href="#testimonials" className="navTestimonials">About</a>
          </li>
        </div>
        <div className="navContact">
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact" className="navContact">Contact</a>
            <p>hidden text</p>
            <p>hidden text</p>
            <p>hidden text</p>
            <p>hidden text</p>
            <p>hidden text</p>
            <p>hidden text</p>
          </li>
        </div>
        <div className="innerMenu"></div>
      </ul>
      </div>
    </div>
  )
}
