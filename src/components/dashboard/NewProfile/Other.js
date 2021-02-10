import React, { useState } from "react";
import ErrMsg from "./ErrMsg";
import ErrMsg1 from "./ErrMsg1";
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
    competition: false,
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
                [e.target.name]: !selected[e.target.name],
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
                [e.target.name]: !selected[e.target.name],
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
                [e.target.name]: !selected[e.target.name],
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
                [e.target.name]: !selected[e.target.name],
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
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                ...selected,
                [e.target.name]: !selected[e.target.name],
              });
            }}
            name="competition"
            className={
              selected.competition
                ? "modal-select-btn res"
                : "modal-select-normal res"
            }
            id="com"
            onClick={(e) => {
              e.preventDefault();
              setSelected({
                ...selected,
                [e.target.name]: !selected[e.target.name],
              });
            }}
          >
            Competition
          </button>
        </div>
      </div>
      <div className="two">
        <div className="inp-co">
          <label className="my-label">Name</label>
          {/* <input
            type="text"
            placeholder="Example: Google or Facebook"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          /> */}
          <ErrMsg
            placeholder="Example: Google or Facebook"
            msg="Company is required"
          />
        </div>
        <div className="inp-co">
          <label className="my-label">Role</label>
          {/* <input
            type="text"
            placeholder="Example: Software Engineer"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          /> */}
          <ErrMsg
            placeholder="Example: Software Engineer"
            msg="Title is required"
          />
        </div>
      </div>
      <div className="two">
        <div className="inp-co">
          <label className="my-label">From</label>
          {/* <select className="inp-type">
            <option>January</option>
            <option>February</option>
          </select> */}
          <ErrMsg1 msg="Start month is required" />
        </div>
        <div className="inp-co">
          <label className="my-label">To</label>
          {/* <select className="inp-type">
            <option>January</option>
          </select> */}
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
          {/* <select className="inp-type">
            <option>January</option>
          </select> */}
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

export default Other;
