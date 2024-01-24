import "./hero.css";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="hero-container" >
      <div className="content-box">
        <div className="title">
          <p className="art">Find Best Solution</p>
          <p className="problem"> For Your Problem</p>
        </div>
      
        <div className="button">
           <a href="#form"> <button  className="book-btn">Book Appointment</button></a>
        </div>
      </div>
      <div className="image">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
