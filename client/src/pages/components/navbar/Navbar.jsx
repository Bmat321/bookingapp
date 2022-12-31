import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <span className="logo">Nigeria Booking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
