import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/login",
    name: "Login",
  },
  {
    to: "/contact",
    name: "Contact",
  },
  {
    to: "/products",
    name: "Products",
  },
  {
    to: "/users",
    name: "Users",
  },
];

const baseStyle = {
  color: "black",
};
const activeStyle = {
  color: "red",
};

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "70%",
        margin: "auto",
      }}
    >
      {links.map((link) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          key={link.name}
          to={link.to}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};
