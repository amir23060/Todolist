import React from "react";
import "./about.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Endpoint from "./endpoint";
export default function About() {
  return (
    <>
      <div className="about">
        <h1>About</h1>
        <div className="brosche">
          <p>
            This project is a simple yet powerful user directory system that
            helps manage and display user profiles in a clean and organized way.
            Whether you're showcasing team members, users, or contributors —
            this app makes it easy and intuitive. Why It Exists We built this
            project as a learning exercise to explore React, CSS Grid, and
            dynamic data management. Over time, it evolved into a tool that can
            be repurposed for real-world use in admin dashboards, team
            portfolios, and more. The Stack - React (for frontend UI) - CSS
            (custom styling with modern flex/grid layout) - Local state or
            backend API (depending on implementation) Want to contribute or give
            feedback? <Link to="/contacts">Contacts</Link>
          </p>
        </div>
      </div>
      <Endpoint></Endpoint>
    </>
  );
}
