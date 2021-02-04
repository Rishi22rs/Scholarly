import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./CandidateCard";
import "./CandidateCard.css";

const CandidateContainer = () => {
  const history = useHistory();

  const content = [
    {
      id: 0,
      name: "Shankar Kumar",
      degree: "BA/BS - Computer Science",
    },
    { id: 1, name: "Shankar Kumar", degree: "BA/BS - Computer Science" },
    { id: 2, name: "Shankar Kumar", degree: "BA/BS - Computer Science" },
    { id: 3, name: "Shankar Kumar", degree: "BA/BS - Computer Science" },
    { id: 4, name: "Shankar Kumar", degree: "BA/BS - Computer Science" },
    { id: 5, name: "Shankar Kumar", degree: "BA/BS - Computer Science" },
  ];

  return (
    <div className="containingDiv">
      <div className="containerDiv">
        <div className="p-cards">
          <div className="p-grid-c grid-cols-3 gap-2 place-items-auto h-48">
            {content.map((each) => {
              return <Card each={each} key={each.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CandidateContainer;
