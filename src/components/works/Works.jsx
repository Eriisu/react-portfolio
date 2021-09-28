import "./works.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState (0);
  const data = [
    {
      id: "1",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632861344/ruby_eo8ikh.png",
      title: "Whatever",
      desc: "A team-built web app produced as a final project at Le Wagon coding bootcamp, built using Ruby on Rails, HTML, SCSS and JavaScript, as well as two APIs to provide data. Users can sign-up before completing a short survey in order to find a recommended movie and meal for the evening. I designed and coded the majority of the front-end.",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1632861748/whatever-survey_wzj6s5.png",
      url: "http://www.whatever.watch/",
    },
    {
      id: "2",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632861491/react_sx85pb.png",
      title: "ScareBnB",
      desc: "A clone of AirBnB, built as a group project using Ruby on Rails, HTML, SCSS and JavaScript. Users may browse a selection of fictional monsters and serial killers before logging-in to create a 'spooking' and hire the selected stalker to scare their friends! I used Figma to create wireframes before coding the front-end.",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1632833669/scarebnb_uery2n.png",
      url: "https://airbnb-scoomey.herokuapp.com/",
    },
    {
      id: "3",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632846442/code_sv7jbm.png",
      title: "SpacePro",
      desc: "A multi-page website built as my first completely independent personal project. The site provides basic information on planets in our Solar System, as well as a contact form for user suggestions and comments. It was built using HTML, CSS and PHP using only my self-taught skills.",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1632861984/spacepro-home_y6znho.png",
      url: "https://eriisu.github.io/SpacePro/home.html",
    },
  ];

  const handleClick = (way) => {
    way === "left"
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href={d.url} className="view">
                  <span>View Project</span>
                </a>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <ArrowBackIosNewIcon className="arrow left" onClick={() => handleClick("left")} />
      <ArrowForwardIosIcon className="arrow right" onClick={() => handleClick("right")} />
    </div>
  )
}
