import React, { useState } from "react";
import TextEditor from "./TextEditor";

const Work = () => {
  const [max, setMax] = useState(false);

  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="two">
        <div className="inp-co">
          <label className="my-label">Project Title</label>
          <input
            type="text"
            placeholder="Enter project title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inp-co">
          <label className="my-label">Role</label>
          <input
            type="text"
            placeholder="Enter project title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="two">
        <div className="inp-co">
          <label className="my-label">From</label>
          <select className="inp-type">
            <option>January</option>
          </select>
        </div>
        <div className="inp-co">
          <label className="my-label">To</label>
          <select className="inp-type">
            <option>January</option>
          </select>
        </div>
      </div>
      <div className="two">
        <div className="inp-co">
          <select className="inp-type">
            <option>January</option>
          </select>
        </div>
        <div className="inp-co">
          <select className="inp-type">
            <option>January</option>
          </select>
        </div>
      </div>
      <div className="inp-co" style={{ flexDirection: "row" }}>
        <input type="checkbox" style={{ marginRight: 10 }} />
        <label>Current Experience</label>
      </div>
      <div className="inp-co">
        <label className="my-label">Description</label>
        <TextEditor
          name="description"
          setMax={setMax}
          value={description}
          raw={description}
          setDesc={setDescription}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Work;
