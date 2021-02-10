import React, { useState } from "react";
import ErrMsg from "./ErrMsg";
import ErrMsg1 from "./ErrMsg1";
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
          <label className="my-label">Company / Organization</label>
          {/* <input
            type="text"
            placeholder="Enter project title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          /> */}
          <ErrMsg msg="Company is required" placeholder="Enter project title" />
        </div>
        <div className="inp-co">
          <label className="my-label">Job Title</label>

          <ErrMsg msg="Title is required" placeholder={"Enter job title"} />
        </div>
      </div>
      <div className="two">
        <div className="inp-co">
          <label className="my-label">From</label>
          {/* <select className="inp-type">
            <option>Select...</option>
            <option>January</option>
          </select> */}
          <ErrMsg1 msg="Start month is required" />
        </div>

        <div className="inp-co">
          <label className="my-label">To</label>
          <ErrMsg1 msg="End month is required" />
        </div>
      </div>
      <div className="two">
        <div className="inp-co">
          {/* <select className="inp-type">
            <option>January</option>
          </select> */}
          <ErrMsg1 msg="Start year is required" />
        </div>
        <div className="inp-co">
          <ErrMsg1 msg="End year is required" />
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
