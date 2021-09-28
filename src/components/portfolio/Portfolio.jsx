import "./portfolio.scss"
import { PortfolioList } from "../portfolioList/PortfolioList"
import React, { useEffect, useState } from "react";
import { featuredPortfolio,
    rubyPortfolio,
    reactPortfolio,
    htmlPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "ruby",
      title: "Ruby on Rails",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "html",
      title: "HTML and CSS",
    },
  ];

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "ruby":
        setData(rubyPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "html":
        setData(htmlPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            url={item.url}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <a href={d.url}>{d.title}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
