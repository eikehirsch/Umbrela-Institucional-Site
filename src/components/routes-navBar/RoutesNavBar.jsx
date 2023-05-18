import React from "react";
import "./RoutesNavBar.css";
import { Link } from "react-router-dom";

const RoutesNavBar = () => {
  return (
    <section className="routesNavBar-wrapper">
      <div className="paddings flexCenter innerWidth routesNavBar-container">
        <img src="./umbrella-logo.png" alt="Umbrella Logo" />

        <div className="flexCenter routesNavBar-menu">
          <Link to="/">Home</Link>
          <Link to="/raccoon-city">Raccoon City</Link>
          <Link to="/nossa-historia">Nossa história</Link>
          <Link to="/red-queen">Red Queen</Link>
        </div>
      </div>
    </section>
  );
};

export default RoutesNavBar;
