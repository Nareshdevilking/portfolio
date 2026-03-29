import { Link } from "react-scroll";

function Navbar(){
  return(
    <nav className="navbar">

      <div className="logo">
        Umashankar
      </div>

      <ul className="nav-links">

        <li>
          <Link to="hero" smooth={true} duration={500} spy={true} offset={-80}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500} spy={true} offset={-80}>
            About
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true} duration={500} spy={true} offset={-80}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="services" smooth={true} duration={500} spy={true} offset={-80}>
            Services
          </Link>
        </li>

        <li>
          <Link to="projects" smooth={true} duration={500} spy={true} offset={-80}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500} spy={true} offset={-80}>
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar