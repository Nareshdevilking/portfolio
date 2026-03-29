import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import photo from "../assets/photo.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1 className="hero-title">
          Hi, I'm <span className="name-highlight">Umashankar</span>
        </h1>

        <TypeAnimation
          sequence={[
            "AI & Data Science Graduate",
            2000,
            "Web Developer",
            2000,
            "Machine Learning Enthusiast",
            2000,
            "React Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="hero-subtitle"
        />

        <p className="hero-desc">
            Passionate about building <span className="highlight"> intelligent systems </span> 
            and modern <span className="highlight">web applications</span> using 
           <span className="highlight"> AI</span>, 
           <span className="highlight"> data science</span> and 
           <span className="highlight"> React</span>.
        </p>

        <Link to="projects" smooth={true} duration={500}>
          <button className="hero-btn">
            View Projects
          </button>
        </Link>

      </div>

      <div className="hero-right">
        <img src={photo} alt="Umashankar" />
      </div>

    </section>
  );
}

export default Hero;