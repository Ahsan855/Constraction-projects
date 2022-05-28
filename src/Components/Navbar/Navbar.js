import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#F0542D]">
      <div class="navbar container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#F0542D] rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Review</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
            <a className="text-2xl ml-5 text-white">Constraction</a>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a className="text-white">Home</a>
            </li>
            <li>
              <a className="text-white">About Us</a>
            </li>
            <li>
              <a className="text-white">Products</a>
            </li>
            <li>
              <a className="text-white">Review</a>
            </li>
            <li>
              <a className="text-white">Services</a>
            </li>
            <li>
              <a className="text-white">Contact</a>
            </li>
            <li>
              <a className="text-white">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
