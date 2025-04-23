import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Input from "./input";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Input show={show} />
    </>
  );
}
