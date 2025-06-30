import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Must include for navbar toggle
import {Link} from "react-scroll";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" smooth={true} duration={300} className="navbar-brand">
            Portfolio
          </Link>
          <button
            className="navbar-toggler navbtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarSec" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="about" smooth={true} duration={300} className="nav-link text-warning" aria-current="page">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="skills" smooth={true} duration={300} className="nav-link text-warning">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="project" smooth={true} duration={300} className="nav-link text-warning">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" smooth={true} duration={300} className="nav-link text-warning">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

