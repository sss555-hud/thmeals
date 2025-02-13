import React from "react";
import { Link } from "react-router-dom";
import "./Alfavit.css";

const Alfavit = () => {
const letters = "A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z".split("");

  return (
    <div className="alfavit-container">
      {
      letters.map((letter) => (
        <Link key={letter} to={`/alfavit/${letter}`} className="alfavit-title">
          {letter}
        </Link>
      ))}
    </div>
  );
};

export default Alfavit;
