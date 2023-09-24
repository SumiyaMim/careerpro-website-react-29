/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text" : ""
        }>Home</NavLink>
        </li>
        <li>
        <NavLink to="/applied" className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text" : ""
        }>Applied Jobs</NavLink>
        </li>
        <li>
        <NavLink to="/blogs" className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text" : ""
        }>Blogs</NavLink>
        </li>
    </>

  return (
    <div className="navbar bg-gradient-to-r from-[#f1f3ff] to-[#f5f1ff] pl-3 md:pl-5 pr-8 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="normal-case text-2xl font-extrabold">CareerPro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center justify-center gap-4 font-medium text-sm menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-md text-white font-bold text-sm">Star Applying</button>
      </div>
    </div>
  );
};

export default Header;
