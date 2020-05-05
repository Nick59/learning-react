import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
    <div className="jumbotron">
      <h1>Plurasight administration</h1>
      <p>React Flux for web apps</p>
      <Link to="about" className="btn btn-primary">About us</Link>
    </div>
  );
};

export default Homepage;