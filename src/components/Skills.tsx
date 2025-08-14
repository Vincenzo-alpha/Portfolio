import html from "../assets/html.svg"
import css from "../assets/css.png"
import js from "../assets/js.svg"
import react from "../assets/React.png"
import php from "../assets/php.png"
import c from "../assets/c.png"
import java from "../assets/java.jpg"
import py from "../assets/py.png"

function Skills() {
  return (
    <>
      <div id='skills' className="container">
        <h1>SKILLS</h1>
        <div className="parent2">
        <h3 className='skills-heading'>Using Now:</h3>
          <div className="div1">
            <img src={ html} alt="html" />
            <p>HTML5</p>
          </div>
          <div className="div2">
            <img src= { css } alt="css" />
            <p>CSS3</p>
          </div>
          <div className="div3">
            <img src= { js } alt="Javascript" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="div4">
            <img src= { react } alt="React" />
            <p>REACT</p>
          </div>
          <div className="div5">
            <img src= { php } alt="php" />
            <p>PHP</p>
          </div>
        </div>
        <div className="parent3">
        <h3 className='skills-heading'>Other Technical Skills:</h3>
          <div className="div1">
            <img src= { c } alt="C/C++" />
            <p>C/C++</p>
          </div>
          <div className="div2">
            <img src= { java } alt="java" />
            <p>JAVA</p>
          </div>
          <div className="div3">
            <img src= { py } alt="Python" />
            <p>PYTHON</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
