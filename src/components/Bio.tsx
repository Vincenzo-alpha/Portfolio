import React from "react";
import myph from "../assets/myph1.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <>
      <div className="forBgColor">
        <div id="bio" className="container">
          <h1 className="bio text-center">Bio</h1>
          <div className="content-section row gx-5 justify-content-center">
            <h3 className="col-12 text-center pb-5">
              <u>INTRODUCTION</u>
            </h3>
            <div className="bio-content col-12 col-md-6 pb-5">
              <p className="text-justify px-5 px-md-0">
                My name is Santanu Hui, a dedicated and enthusiastic Front-End
                Developer with a solid academic background in Computer
                Applications. I recently completed my Bachelor's degree and am
                currently pursuing a Master's in Computer Applications. I have a
                strong passion for building responsive, user-friendly web
                interfaces and continuously exploring new technologies to
                improve my skills. As a fresher, I am eager to contribute my
                knowledge to real-world projects, grow within a collaborative
                environment, and deliver impactful solutions that enhance user
                experience.
              </p>
            </div>
            <div className="bio-image col-12 col-md-3  row justify-content-center bg-dark border-1 rounded-3">
              <img className="col-12" src={myph} alt="My photo" />
            </div>
          </div>
          <div className="skill-section mt-5 pt-5 row justify-content-center">
            <h3 className="text-center my-5 col-12">
              <u>SKILLS</u>
            </h3>
            <p className="px-5 px-md-0 col-9">
              I possess a well-rounded set of technical skills suited for
              front-end and basic back-end development. My front-end expertise
              includes HTML, CSS, and JavaScript, which I use to design and
              develop responsive web pages. On the back-end, I have experience
              working with PHP and MySQL, allowing me to build dynamic websites
              and manage databases. Additionally, I have programming experience
              in C, Java, and Python, providing me with a logical and
              problem-solving approach to development. I am also comfortable
              working with APIs and understand the importance of clean,
              maintainable code.
            </p>
          </div>
          <hr />
          <div className="education-section mt-5 pt-5 row justify-content-center">
            <h3 className="text-center my-5">
              <u>EDUCATION</u>
            </h3>
            <p className="px-5 px-md-0 col-9">
              I am currently pursuing a Master of Computer Applications (M.C.A.)
              from Haldia Institute of Technology, where I have maintained a
              CGPA of 8.62 out of 10. I completed my Bachelor of Computer
              Applications (B.C.A.) from Belda College with a score of 73.26%,
              which laid the foundation for my technical knowledge in software
              and web development. My academic journey began at Kendriya
              Vidyalaya Jalipa Cantt, Barmer, where I achieved 80.80% in 12th
              grade and 71.20% in 10th grade under the CBSE board.
            </p>
          </div>
          <hr />
          <div className="project-section mt-5 pt-5 row justify-content-center">
            <h3 className="text-center my-5 ">
              <u>PROJECTS</u>
            </h3>
            <p className="px-5 px-md-0 col-9">
              One of my notable projects is Bus Yatra, an online bus booking
              management system. It was developed using PHP, MySQL, HTML, CSS,
              and JavaScript. The system provides users with a convenient
              platform to book bus tickets while simplifying administrative
              tasks for operators. It is scalable and easy to maintain. Another
              project I developed is a Flipkart Clone, a static front-end
              replica designed using HTML and CSS. Although not built for
              production, this project serves as a demonstration of my design
              and layout capabilities. Additionally, I built a Rock, Paper,
              Scissors Game using HTML, CSS, and JavaScript. This fully
              functional game showcases my understanding of DOM manipulation and
              interactive UI development.
            </p>
            <hr />
          <div className="col-12 row justify-content-center mb-5">
             <Link to={'/'} className="col-3 col-md-1 text-center  text-white bg-dark p-3 rounded-3">
              | Home |
            </Link>
          </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
