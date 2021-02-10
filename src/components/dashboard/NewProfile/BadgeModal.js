import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./modal.css";
import "./modal-user.css";

import { Dvr } from "@material-ui/icons";
import cross from "./assets/cross.svg";
import Work from "./Work";
import Achievement from "./Achievement";
import Other from "./Other";

const BadgeModal = ({ isOpen, closeModal }) => {
  const [max, setMax] = useState(false);

  const [title, setTitle] = useState("");
  const [banner, setBanner] = useState("");
  const [description, setDescription] = useState("");

  const [selected, setSelected] = useState({
    w: false,
    a: false,
    o: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: width < 500 ? 0 : 80,
          bottom: width < 500 ? 0 : 80,
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: 9999,
          margin: 0,
          padding: 0,
          backgroundColor: "white",
          color: "#949EC4",
          maxWidth: 750,
          margin: "auto",
          borderRadius: 10,
        },
        overlay: {
          background: "rgba(16,16,16,0.75)",
        },
      }}
    >
      <div className="modal-heading-user">
        <button className="cross" onClick={closeModal}>
          <img src={cross} alt="cross" />
        </button>
        <button className="modal-btn">Save</button>
      </div>
      <h5 className="exp">Add Experience</h5>
      <form className="my-form">
        <div className="inp-co-1">
          <label className="my-label">Experience type</label>
          <div className="inp-co-user">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelected({
                  w: true,
                  a: false,
                  o: false,
                });
              }}
              className={
                selected.w ? "modal-select-btn res" : "modal-select-normal res"
              }
            >
              Volunteer Work
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelected({
                  w: false,
                  a: true,
                  o: false,
                });
              }}
              className={
                selected.a ? "modal-select-btn res" : "modal-select-normal res"
              }
            >
              Achievement
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelected({
                  w: false,
                  a: false,
                  o: true,
                });
              }}
              className={
                selected.o ? "modal-select-btn res" : "modal-select-normal res"
              }
            >
              Other
            </button>
          </div>
        </div>
        {selected.w && <Work />}
        {selected.a && <Achievement />}
        {selected.o && <Other />}
      </form>
    </Modal>
  );
};
export default BadgeModal;
