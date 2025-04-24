import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./display";

const Input = ({ setData, data }) => {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const occupationTypes = ["work", "unemployed", "student", "rather not say"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      age,
      occupation,
      id: Date.now(),
      image: image ? URL.createObjectURL(image) : null,
    };
    setData((prev) => [...prev, newUser]);
    setAge("");
    setname("");
    setOccupation("");
    setImage(null);
    setShow(false);
  };

  return (
    <div className="layout">
      <div className="content">
        <div className="inputPage">
          <div className="topBar">
            <button
              className="addUserButton"
              onClick={() => setShow((prev) => !prev)}
              type="button"
            >
              {show ? "Hide form" : "Add new user"}
            </button>
            <div
              id="info"
              onClick={() =>
                alert("You can go users profile by clicking on the users image")
              }
            >
              {" "}
              <h3>?</h3>
            </div>
          </div>

          {show && (
            <div className="formContainer">
              <form className="forms" onSubmit={handleSubmit}>
                <p>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </p>
                <p>
                  Age:
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </p>
                <p>
                  Occupation:
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                  >
                    <option value="" disabled>
                      Choose an occupation
                    </option>
                    {occupationTypes.map((occu, index) => (
                      <option key={index}>{occu}</option>
                    ))}
                  </select>
                </p>
                <p>
                  Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </p>
                <input type="submit" value="Add user" />
              </form>
            </div>
          )}
        </div>

        <Display data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Input;
