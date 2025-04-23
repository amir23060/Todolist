import React from "react";
import "./App.css";
const Display = ({ data, setData }) => {
  const handleDelete = (id) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
  };
  return (
    <div className="display">
      {data ? (
        data.map((user) => (
          <div key={user.id} className="displayUser">
            <div>
              {user.image ? <img src={user.image} alt="image" /> : ""}
              <h1 style={{ textAlign: "center" }}>{user.name}</h1>
            </div>
            <h4>Age:{user.age}</h4>
            <h4>Occupation:{user.occupation}</h4>
            <input
              type="button"
              value="Delete"
              onClick={() => handleDelete(user.id)}
            />
          </div>
        ))
      ) : (
        <div>
          <h4>no user found</h4>
        </div>
      )}
    </div>
  );
};
export default Display;
