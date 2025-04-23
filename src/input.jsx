import React, { useState } from "react";
import "./App.css";
import Display from "./display";
const Input = ({ setData, data }) => {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const occupationTypes = ["work", "unemployed", "student", "rather not say"];
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUSer = {
      name,
      age,
      occupation,
      id: Date.now(),
      image: image ? URL.createObjectURL(image) : null,
    };
    setData((prev) => [...prev, newUSer]);
    setAge("");
    setname("");
    setOccupation("");
    setImage(null);
  };
  return (
    <>
      <button type="button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Add new user"}
      </button>

      {show && (
        <form onSubmit={handleSubmit}>
          <p>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </p>
          <p>
            Age:{" "}
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </p>
          <p>
            Occupation:{" "}
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value="" disabled>
                Choose a occupation
              </option>
              {occupationTypes.map((occu, index) => (
                <option key={index}>{occu}</option>
              ))}
            </select>
          </p>
          <p>
            Image:{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </p>
          <input type="submit" value="Add user" />
        </form>
      )}
      <div>
        <Display data={data} setData={setData}></Display>
      </div>
    </>
  );
};
export default Input;
