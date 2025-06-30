import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";


export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-md-left">
          
          {/* About Me */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">About Me</h5>
            <p className="footer-text">
              I'm Link passionate developer who loves building modern web apps, learning new technologies, and solving real-world problems with code.
            </p>
          </div>

          {/* Skills */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Projects</h5>
            <p><Link to="#" className="text-white text-decoration-none">Bus Yatra</Link></p>
            <p><Link to="#" className="text-white text-decoration-none">Flipkart Clone</Link></p>
            <p><Link to="#" className="text-white text-decoration-none">Uber Clone</Link></p>
            <p><Link to="#" className="text-white text-decoration-none">Game</Link></p>
          </div>

          {/* Social MediLink */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Social</h5>
            <p>
              <Link to="https://www.linkedin.com/in/santanu-hui-455252335/" className="text-white text-decoration-none">
                <FaLinkedin /> LinkedIn
              </Link>
            </p>
            <p>
              <Link to="https://github.com/Vincenzo-alpha" className="text-white text-decoration-none">
                <FaGithub /> GitHub
              </Link>
            </p>
            <p>
              <Link to="https://www.instagram.com/santanu_hui/" className="text-white text-decoration-none">
                <FaInstagram /> Instagram
              </Link>
            </p>
            <p>
              <Link to="#" className="text-white text-decoration-none">
                <FaEnvelope /> Email
              </Link>
            </p>
          </div>

          {/* More Links */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">More</h5>
            <p><Link to="project" className="text-white text-decoration-none">Projects</Link></p>
            <p><Link to="#" className="text-white text-decoration-none">Resume</Link></p>
            {/* <p><Link to="#" className="text-white text-decoration-none">Blog</Link></p> */}
            <p><Link to="contact" className="text-white text-decoration-none">Contact</Link></p>
          </div>

        </div>

        <hr className="mb-4" />

        {/* Footer Bottom */}
        <div className="row align-items-center">

          <div className="col-md-5 col-lg-12">
            <div className="text-center text-md-right">
              <Link to="https://www.linkedin.com/in/santanu-hui-455252335/" className="text-white me-4"><FaLinkedin /></Link>
              <Link to="https://github.com/Vincenzo-alpha" className="text-white me-4"><FaGithub /></Link>
              <Link to="https://www.instagram.com/santanu_hui/" className="text-white me-4"><FaInstagram /></Link>
            </div>
          </div>
          <div className="col-md-7 col-lg-12">
            <p>© {new Date().getFullYear()} All rights reserved by <strong className="text-warning">Santanu Hui</strong></p>
          </div>
        </div>

      </div>
    </footer>
  );
}
