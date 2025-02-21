import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="space-x-2">
      <Link to="/">Home</Link>
      <Link to="/team">Team</Link>
      <Link to="/about">About</Link>
      <Link to="/Resources">Resources</Link>
    </div>
  );
};

export default Header;
