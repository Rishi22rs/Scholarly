import React, { useEffect } from "react";
import WhatsApp from "./NewWhatsApp";
import Projects from "./NewProjects";
import Zoom from "./Zoom";
import Cards from "./Cards";
import "./UtilityBoard.css";
import Frame1 from "./assets/Frame1.svg";
import Frame2 from "./assets/Frame2.svg";

function UtilityBoard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="utility-component">
      <div className="utility-header" />
      <Cards />
      <Projects />
      <div className="align-div">
        <div className="illustration1">
          <h2 className="frame1-text">Let companies know your availability</h2>
          <img className="frame1" src={Frame2} alt="Frame1" />
          <button className="mybtn-d">Availability</button>
        </div>
        <div className="illustration2">
          <img className=" fu" src={Frame1} alt="Frame2" />
        </div>
      </div>
      {/* <WhatsApp/> */}
      <div className="align-div2">
        <Zoom />
        <div className="illustration3"></div>
      </div>
    </div>
  );
}

export default UtilityBoard;
