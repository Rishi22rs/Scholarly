import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import "./ProjectsForYou.css";
import { content } from "./Content";
const ProjectsForYou = () => {
  const history = useHistory();

  return (
    <div className="containingDiv">
      <div className="containerDiv">
        <div className="p-cards">
          <div className="p-grid grid-cols-3 gap-2 place-items-auto h-48">
            {content.map((each) => {
              return (
                // <Card each={each} key={each.id}/>
                <span
                  onClick={() =>
                    history.push(`/dashboard/new-projects/${each.id}`)
                  }
                >
                  <Card each={each} key={each.id} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsForYou;
