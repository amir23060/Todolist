import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Input from "./input";
import Display from "./display";
import "./App.css";
import Contacts from "./Contacts";
import About from "./about";
import Profile from "./profile";

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Router>
        <nav className="navbar">
          <p>
            <Link to="/">Home</Link>
          </p>

          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/contacts">Contacts</Link>
          </p>
        </nav>

        <Routes>
          <Route path="/" element={<Input setData={setData} data={data} />} />
          <Route
            path="/display"
            element={<Display data={data} setData={setData} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
