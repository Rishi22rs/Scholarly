import React, { useState } from "react";

const ErrMsg = ({ msg, placeholder }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();

  return (
    <>
      <input
        style={show ? { border: "2px solid red" } : {}}
        type="text"
        placeholder={placeholder}
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={(e) => {
          console.log(e.target.value);
          e.target.value === "" ? setShow(true) : setShow(false);
        }}
      />
      {show && (
        <p
          style={{
            marginBottom: -25,
            color: "red",
            fontWeight: 700,
            fontSize: "0.75rem",
          }}
        >
          {msg}
        </p>
      )}
    </>
  );
};

export default ErrMsg;
