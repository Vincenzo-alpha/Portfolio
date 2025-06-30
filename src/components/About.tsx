export default function About() {
  return (
    <>
      <div id="about" className="container">
        <h1>ABOUT ME</h1>
        <div className="about-section">
          <p>
            I am Santanu Hui, an aspiring front-end developer with a strong
            foundation in web technologies and a passion for building clean,
            responsive, and interactive websites. Currently pursuing my Master
            of Computer Applications (M.C.A.) from Haldia Institute of
            Technology, I have a solid academic background in computer science,
            supported by a B.C.A. degree from Belda College. My journey into web
            development began with curiosity and has since grown into a focused
            skill set in HTML, CSS, JavaScript, and PHP. I enjoy turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>

          <p>
            Throughout my learning journey, I’ve worked on several hands-on
            projects that demonstrate my understanding of real-world
            development—such as a fully functional Bus Booking System and a
            Flipkart UI clone. I’m a quick learner who thrives in team
            environments and enjoys collaborating with others to create web
            experiences that not only look good but also perform well. With a
            strong drive to grow, I’m eager to join a dynamic team where I can
            contribute my skills and continue learning from experienced
            professionals.
          </p>

          <center>
            <button className="btn btn-dark">
              | Explore |
            </button>
          </center>
        </div>

        <div className="parent">
          <div className="div1">
            <img className="knowledge" src="/src/assets/ab1.png" alt="" />
            <h4>DESIGN</h4>
            <p>
              I can design the website based on your needs and suggestions. I
              can also create it from scratch by consulting with you during
              work.
            </p>
          </div>
          <div className="div2">
            <img className="knowledge" src="src/assets/ab3.png" alt="" />
            <h4>DEVELOPMENT</h4>
            <p>
              Based on a project created by me or another one, sent by you, I
              can program the website to be fully functional and responsive.
            </p>
          </div>
          <div className="div3">
            <img className="knowledge" src="src/assets/ab2.png" alt="" />
            <h4>MAINTENANCE</h4>
            <p>
              In case of any problems or the need for changes, I can introduce
              new functionalities and solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
