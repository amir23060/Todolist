import React, { useState, useEffect } from "react";
import "./profile.css";
import { useParams } from "react-router-dom";
export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "[]");
    console.log("All Users:", userData);
    console.log("Looking for ID:", id);
    const foundUser = userData.find((u) => u.id.toString() === id);
    console.log("Found User:", foundUser);
    setUser(foundUser);
  }, [id]);

  if (!user)
    return <p style={{ textAlign: "center" }}>Loading user profile...</p>;
  return (
    <>
      <div className="scaling">
        <div className="profile">
          {user.image ? (
            <img src={user.image} alt="user"></img>
          ) : (
            <img src="fallback.png"></img>
          )}
          <h1>{user.name}</h1>
          <h3>{user.age}yo</h3>
          {user.occupation ? <h3>{user.occupation}</h3> : ""}
        </div>
      </div>
    </>
  );
}
