import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiMongodb, SiPandas, SiNumpy } from "react-icons/si";

function Skills(){
  return(
    <section className="skills-section" id="skills"> 

      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">

        <div className="skill-card"><FaPython/> Python</div>
        <div className="skill-card"><SiMysql/> SQL</div>
        <div className="skill-card"><FaHtml5/> HTML5</div>
        <div className="skill-card"><FaCss3Alt/> CSS3</div>
        <div className="skill-card"><FaJs/> JavaScript</div>
        <div className="skill-card"><FaReact/> React</div>
        <div className="skill-card"><FaNodeJs/> Node JS</div>
        <div className="skill-card"><SiMongodb/> MongoDB</div>
        <div className="skill-card"><SiPandas/> Pandas</div>
        <div className="skill-card"><SiNumpy/> NumPy</div>
        <div className="skill-card"><FaGitAlt/> Git</div>

      </div>

    </section>
  )
}

export default Skills