import React from 'react'

function Skills() {
  return (
    <>
      <div id='skills' className="container">
        <h1>SKILLS</h1>
        <div className="parent2">
        <h3 className='skills-heading'>Using Now:</h3>
          <div className="div1">
            <img src="/src/assets/html.svg" alt="html" />
            <p>HTML5</p>
          </div>
          <div className="div2">
            <img src="/src/assets/css.png" alt="css" />
            <p>CSS3</p>
          </div>
          <div className="div3">
            <img src="/src/assets/js.svg" alt="" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="div4">
            <img src="/src/assets/React.png" alt="react" />
            <p>REACT</p>
          </div>
          <div className="div5">
            <img src="/src/assets/php.png" alt="php" />
            <p>PHP</p>
          </div>
        </div>
        <div className="parent3">
        <h3 className='skills-heading'>Other Technical Skills:</h3>
          <div className="div1">
            <img src="/src/assets/c.png" alt="html" />
            <p>C/C++</p>
          </div>
          <div className="div2">
            <img src="/src/assets/java.jpg" alt="css" />
            <p>JAVA</p>
          </div>
          <div className="div3">
            <img src="/src/assets/py.png" alt="" />
            <p>PYTHON</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
