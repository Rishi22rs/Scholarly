import React, { useState } from "react";
import TextEditor from "./TextEditor";

const Other = () => {
  const [max, setMax] = useState(false);

  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [description, setDescription] = useState("");

  const [selected, setSelected] = useState({
    club: true,
    affiliation: false,
    sport: false,
    hackathon: false,
  });
  return (
    <>
      <div className="inp-co-1">
        <label className="my-label">Experience type</label>
        <div className="inp-co-user">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                ...selected,
                [e.target.name]: true,
              });
            }}
            name="club"
            className={
              selected.club ? "modal-select-btn res" : "modal-select-normal res"
            }
          >
            Club
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                ...selected,
                [e.target.name]: true,
              });
            }}
            name="affiliation"
            className={
              selected.affiliation
                ? "modal-select-btn res"
                : "modal-select-normal res"
            }
          >
            Affiliation
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                ...selected,
                [e.target.name]: true,
              });
            }}
            name="sport"
            className={
              selected.sport
                ? "modal-select-btn res"
                : "modal-select-normal res"
            }
          >
            Sport Team
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                ...selected,
                [e.target.name]: true,
              });
            }}
            name="hackathon"
            className={
              selected.hackathon
                ? "modal-select-btn res"
                : "modal-select-normal res"
            }
          >
            Hackathon
          </button>
        </div>
      </div>
      <div className="two">
        <div className="inp-co">
          <label className="my-label">Name</label>
          <input
            type="text"
            placeholder="Example: Google or Facebook"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inp-co">
          <label className="my-label">Role</label>
          <input
            type="text"
            placeholder="Example: Software Engineer"
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
            <option>February</option>
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

export default Other;
