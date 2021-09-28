import "./testimonials.scss"
import curvedarrow from '../../assets/curved-arrow.png'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Elise Burridge",
      title: "CEO of ALBI",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1629469330/zmczjd9vz16qcm7b7dcrdap7mjmw.png",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632846442/code_sv7jbm.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, porro voluptas. Adipisci vitae vel error. Laboriosam exercitationem autem quia praesentium enim asperiores quisquam repellat voluptates, amet nostrum libero alias consequuntur.",
    },
    {
      id: 2,
      name: "Yahya Abouzed",
      title: "Engineer",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1629459635/qsnl9kbogrzy9leh7daw.jpg",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632846442/code_sv7jbm.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, porro voluptas. Adipisci vitae vel error. Laboriosam exercitationem autem quia praesentium enim asperiores quisquam repellat voluptates, amet nostrum libero alias consequuntur.",
      featured: true,
    },
    {
      id: 3,
      name: "Sidney",
      title: "Snake",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1629458684/sample.jpg",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632846442/code_sv7jbm.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, porro voluptas. Adipisci vitae vel error. Laboriosam exercitationem autem quia praesentium enim asperiores quisquam repellat voluptates, amet nostrum libero alias consequuntur.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>About</h1>
      <div className="container">
        {data.map((d)=>(
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={curvedarrow} alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>))}
      </div>
    </div>
  )
}
