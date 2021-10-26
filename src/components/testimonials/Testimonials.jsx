import "./testimonials.scss"
import curvedarrow from '../../assets/curved-arrow.png'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Other interests",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1629469330/zmczjd9vz16qcm7b7dcrdap7mjmw.png",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632846442/code_sv7jbm.png",
      desc: ["• I play a lot of video games, especially if I can mod (and break) them!", <br/>, <br/>, "• I have a degree in Japanese (話しましょう！).", <br/>, <br/>, "• I love all animals, especially reptiles! I have a pet corn snake named Sidney :)"],
    },
    {
      id: 2,
      name: "Who am I?",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1629459635/qsnl9kbogrzy9leh7daw.jpg",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632846442/code_sv7jbm.png",
      desc: "Hi, my name's Elise! I'm a front-end developer with a passion for code and UX/UI design. Having always been interested in technology, I decided to complete Le Wagon's coding bootcamp in 2021! I am now looking to continue my journey with code in a position where I can learn even more and create beautiful user experiences!",
      featured: true,
    },
    {
      id: 3,
      name: "Open to work",
      img: "https://res.cloudinary.com/eriisu/image/upload/v1629458684/sample.jpg",
      icon: "https://res.cloudinary.com/eriisu/image/upload/v1632846442/code_sv7jbm.png",
      desc: "I'm currently open to any projects to help with my learning journey, and would therefore welcome any freelance work. If you think I might be able to help, please don't hesitate to get in touch! If you are also a developer and would like to collaborate on anything, also please let me know! :)",
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
            <div className="bottom">
              <h2>{d.name}</h2>
            </div>
            <div className="center">
              {d.desc}
            </div>
          </div>))}
      </div>
    </div>
  )
}
