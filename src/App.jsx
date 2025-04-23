import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Input from "./input";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Input setData={setData} />} />
        </Routes>
      </Router>
    </>
  );
}
