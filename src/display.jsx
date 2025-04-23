import React, { useState } from "react";
import "./App.css";

const Display = ({ data, setData }) => {
  const [showAll, setShowAll] = useState(false);

  const handleDelete = (id) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
  };

  const displayedUsers = showAll ? data : data.slice(0, 3);

  return (
    <div className="display-wrapper">
      <div className="display">
        {displayedUsers.length > 0 ? (
          displayedUsers.map((user) => (
            <div key={user.id} className="displayUser">
              {user.image && (
                <img src={user.image || "/fallback.png"} alt="user" />
              )}
              <h1>{user.name}</h1>
              <h4> {user.age}yo</h4>
              <h4>
                {user.occupation === "rather not say" || !user.occupation
                  ? ""
                  : user.occupation}
              </h4>
              <input
                type="button"
                value="Delete"
                onClick={() => handleDelete(user.id)}
              />
            </div>
          ))
        ) : (
          <h4>No user found</h4>
        )}
      </div>

      {data.length > 3 && (
        <div className="viewMoreContainer">
          <button className="viewMoreBtn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Display;
