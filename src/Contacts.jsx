import React from "react";
import "./contacts.css";
import Endpoint from "./endpoint";
export default function Contacts() {
  return (
    <>
      <div className="contacts">
        {" "}
        <h1>Contacts</h1>
        <div className="sources">
          <h2>You can contact us using the following</h2>
          <ul>
            <li>
              <h3>Email:amir23060@gmail.com</h3>
            </li>
            <li>
              <h3>Phone:0762846595</h3>
            </li>
          </ul>
        </div>
      </div>
      <Endpoint></Endpoint>
    </>
  );
}
