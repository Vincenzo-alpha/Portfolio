import busYatra from "../assets/busYatra.png";
import flipkart from "../assets/flipkartClone.png";
import rpsgame from "../assets/RPSGame.png";
import sideman from "../assets/sidemanClone.png";
import uber from "../assets/uberClone.png";
import portfolio from "../assets/portfolio.png";
import { useNavigate } from "react-router-dom";


function Project() {
  const navigate = useNavigate();
const gotoweb = (idn: number) => {
  switch (idn) {
    case 1:
      window.open('https://github.com/Vincenzo-alpha/Bus_yatra', '_blank');
      break;
    case 2:
      window.open('https://github.com/Vincenzo-alpha/Flipkart-clone', '_blank');
      break;
    case 3:
      window.open('https://github.com/Vincenzo-alpha/Rock-paper-scissor', '_blank');
      break;
    case 4:
      navigate('/develop');
      break;
    case 5:
      window.open('https://github.com/Vincenzo-alpha/Uber-clone-bootstrap', '_blank');
      break;
    case 6:
      window.open('', '_blank'); // Add your portfolio link here
      break;
  }
};
  return (
    <>
      <div className="forBgColor">
        <div
          id="project"
          className="container d-flex flex-column align-item-center"
        >
          <h1>PROJECTS</h1>
          {/* container */}
          <div className="row row-cols-1 row-cols-sm-4 g-5 mx-auto justify-content-center align-items-center project-container">
            <div className="col px-0 div1">
              <img className="img-fluid" src={busYatra} alt="" />
              <p>BUS YATRA</p>
              <button className="btn btn-dark show-btn" onClick={() =>gotoweb(1)}>Show</button>
            </div>
            <div className="col px-0 div1">
              <img className="img-fluid" src={flipkart} alt="" />
              <p>FLIPKART CLONE</p>
              <button className="btn btn-dark show-btn" onClick={() =>gotoweb(2)}>Show</button>
            </div>
            <div className="col px-0 div1">
              <img className="img-fluid" src={rpsgame} alt="" />
              <p>GAME</p>
              <button className="btn btn-dark show-btn" onClick={() =>gotoweb(3)}>Show</button>
            </div>
            <div className="col px-0 div1">
              <img className="img-fluid" src={sideman} alt="" />
              <p>SIDEMAN CLONE</p>
              <button className="btn btn-dark show-btn" onClick={() =>gotoweb(4)}>Show</button>
            </div>
            <div className="col px-0 div2">
              <img className="img-fluid" src={uber} alt="" />
              <p>UBER CLONE</p>
              <button className="btn btn-dark" onClick={() =>gotoweb(5)}>Show</button>
            </div>
            <div className="col px-0 div1">
              <img className="img-fluid" src={portfolio} alt="" />
              <p>PORTFOLIO</p>
              <button className="btn btn-dark" onClick={() =>gotoweb(6)}>Show</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
