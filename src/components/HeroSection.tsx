import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  const url = () =>{
    const linkdin = 'https://www.linkedin.com/in/santanu-hui-455252335/'
    window.location.href = linkdin
  }
  const github = "https://github.com/Vincenzo-alpha"
  return (
    <>
      <div id="/" className="hero">
        <div>
          <Navbar></Navbar>
        </div>
        <main className="hero-section">
          <div className="section1">
            <div className="row justify-content-center inner-section1">
              <h3 className="col-12 col-md-8 text-center text-md-start">Hello, I'm</h3>
              <h1 className="col-12 col-md-8 text-center text-md-start">Santanu Hui</h1>
              <h5 className="col-12 col-md-8 text-center text-md-start">| Front-End developer |</h5>
              <div className="col-8 row Connect-section1">
                <a className="col-8 col-md-4 text-dark pt-2 pb-5 pb-md-0" href={github}><FaGithub/>  View my GitHub</a>
                <button className="btn btn-dark col-12 col-md-6" onClick={url}><FaLinkedin className="my-auto"/>  Connect with me</button>
              </div>
            </div>
          </div>
          <div className="section2">
            <img className="photo" src="/src/assets/myph1.png" alt="" />
            <div className="d-none design-box"></div>
          </div>
        </main>
      </div>
      <div className="footer">
        <h1>Self Intro</h1>
        <p>
          A passionate and motivated Front-End Developer with a strong
          foundation in web development and a love for clean, user-friendly
          design.
        </p>
      </div>
    </>
  );
}

export default HeroSection;
