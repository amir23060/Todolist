import React, { useState } from "react";
import "./App.css";
const Input = (show) => {
  const [name, setname] = useState("");
  const [friends, setFriends] = useState([]);
  return (
    <>
      <div className={`inputs ${show ? "light-inputs" : ""}`}>
        <h4>hello</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
    </>
  );
};
export default Input;
