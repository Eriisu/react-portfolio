import "./intro.scss"
import headshotgif from "../../assets/headshot-gif.gif"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 6000,
      backSpeed: 60,
      strings: ["Elise Burridge"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <div className="innerBorder">
            <img src={headshotgif} alt="headshot" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1><span className="invisible">|</span><span ref={textRef}></span></h1>
          <h3>a Front-End Developer from London, UK</h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  )
}
