import React from "react";
import clg from "./assets/clg.svg";
import ex from "./assets/ex.svg";
import li from "./assets/li.svg";
import star from "./assets/star1.svg";
import add from "./assets/add.svg";

const CandidateCard = ({ each }) => {
  return (
    <div className="p-card-c">
      <div className="p-container">
        <div className="avatar-c">
          <span className="avatar-c-text">RS</span>
        </div>
        <p className="p-title-c sTop">{each.name}</p>
        <div className="star-container">
          <img src={star} alt="star" className="star" />
          <p className="p-title-c l">Level 2</p>
        </div>
        <div className="container-can">
          {/* <div className="hover-container clg">
            
            <div className="hover-card">Rice University, 2022</div>
          </div> */}
          <img className="ex clg-p" src={add} alt="img" />
          <p className="p-degree">{each.degree}</p>
        </div>
        <div className="container-can">
          {/* <div className="hover-container clg">
            
            <div className="hover-card">Rice University, 2022</div>
          </div> */}
          <img className="ex clg-p" src={add} alt="img" />
          <p className="p-degree">Rice University, 2022</p>
        </div>
        <div className="container-can-ex">
          <div className="hover-container">
            <img className="ex" height="40px" width="40px" src={ex} alt="img" />
            <div className="hover-card">
              Crowd Dynamics labs, Research Assistant
            </div>
          </div>
          <div className="hover-container">
            <img className="ex" height="40px" width="40px" src={ex} alt="img" />
            <div className="hover-card">
              Crowd Dynamics labs, Research Assistant
            </div>
          </div>
          <div className="hover-container">
            <img className="ex" height="40px" width="40px" src={li} alt="img" />
            <div className="hover-card">
              Crowd Dynamics labs, Research Assistant
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="container-btn-cc">
          <button className="btn-cc">Message</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
