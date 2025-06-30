import React from "react";
import busYatra from "../assets/busYatra.png";
import flipkart from "../assets/flipkartClone.png";
import rpsgame from "../assets/RPSGame.png";
import sideman from "../assets/sidemanClone.png";
import uber from "../assets/uberClone.png";
import portfolio from '../assets/portfolio.png'

interface ReadMoreProps {
  id: string
  text: string
  amountOfWords?: number
}

function Project() {
  return (
    <>
      <div id="project" className="container d-flex flex-column align-item-center">
        <h1>PROJECTS</h1>
        {/* container */}
        <div className="row row-cols-1 row-cols-sm-4 g-5 mx-auto justify-content-center align-items-center project-container">
          <div className="col px-0 div1">
            <img className="img-fluid" src={busYatra} alt="" />
            <button className="btn btn-dark show-btn">Show</button>
          </div>
          <div className="col px-0 div1">
            <img className="img-fluid" src={flipkart} alt="" />
            <button className="btn btn-dark show-btn">Show</button>
          </div>
          <div className="col px-0 div1">
            <img className="img-fluid" src={rpsgame} alt="" />
            <button className="btn btn-dark show-btn">Show</button>
          </div>
          <div className="col px-0 div1">
            <img className="img-fluid" src={sideman} alt="" />
            <button className="btn btn-dark show-btn">Show</button>
          </div>
          <div className="col px-0 div2">
            <img className="img-fluid" src={uber} alt="" />
            <button className="btn btn-dark">Show</button>
          </div>
          <div className="col px-0 div1">
            <img className="img-fluid" src={portfolio} alt="" />
            <button className="btn btn-dark">Show</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
