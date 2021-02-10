import React, { useState } from "react";

const ErrMsg1 = ({ msg, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <select
        style={show ? { border: "2px solid red" } : {}}
        className="inp-type"
        onBlur={(e) => {
          console.log(e.target.value);
          e.target.value === "Select..." ? setShow(true) : setShow(false);
        }}
      >
        <option>Select...</option>
        <option>January</option>
      </select>
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

export default ErrMsg1;
