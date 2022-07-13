import React from "react";
import "../styles/styles.css";
import "../styles/header.css";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img className="nav--logo" src="images/fill213.png" />
        <h5 className="nav--title">mytraveljournal.</h5>
      </div>
    </nav>
  );
}
