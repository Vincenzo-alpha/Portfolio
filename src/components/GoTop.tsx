import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsappSquare } from "react-icons/fa";

export default function GoTop() {
  const [isVisible, setvisible] = useState(false);
  useEffect(() => {
    const visible = () => {
      if (window.scrollY > 100) {
        setvisible(true);
      } else {
        setvisible(false);
      }
    };
    window.addEventListener("scroll", visible);

    return () => {
      window.removeEventListener("scroll", visible);
    };
  }, []);

  const goToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div id="goTop">
      {isVisible && (
        <button className="goTop-btn" onClick={goToTop}>
          <FaArrowUp className="arrowIcon" />
        </button>
      )}
    </div>
  );
}
