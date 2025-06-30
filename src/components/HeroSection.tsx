import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <div id="/" className="hero">
        <div>
          <Navbar></Navbar>
        </div>
        <main className="hero-section">
          <div className="section1">     
            <div>
              <h3>Hello, I'm</h3>
              <h1>Santanu Hui</h1>
              <h5>| Front-End developer |</h5>
              </div>
          </div>
          <div className="section2">
            <img className="photo"  src="/src/assets/myph1.png" alt="" />
          </div>
        </main>
      </div>
      <div className="footer">
        <h1>Self Intro</h1>
        <p>A passionate and motivated Front-End Developer with a strong foundation in web development and a love for clean, user-friendly design.</p>
      </div>
    </>
  );
}

export default HeroSection;
