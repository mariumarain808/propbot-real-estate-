import React from "react";
import img from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top shadow-sm">
      <div className="container-fluid">

       
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={img}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold fs-5">Prop Boot</span>
        </NavLink>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Buy">Buy</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Rent">Rent</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Sell">Sell</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        
        <div className="d-flex ms-3">
          <button
            type="button"
            className="btn btn-primary px-4"
            onClick={() => navigate("/Login")}
          >
            Login / Register
          </button>
        </div>
      </div>
    </nav>
  );
}
