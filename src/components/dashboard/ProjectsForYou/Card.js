import React from "react";

const Card = ({ each }) => {
  return (
    <div className="p-card">
      <img className="p-myImg" src={each.img} alt="Avatar" />
      <div className="p-container">
        <p className="p-title">{each.title}</p>
      </div>
    </div>
  );
};

export default Card;
