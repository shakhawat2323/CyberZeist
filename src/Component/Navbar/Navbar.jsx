import React from "react";
import { Link } from "react-router";
import Logo from "../../assets/Logo/Loaoa1.png";
import Logos from "../../assets/Logo/Logo.png";
import Button from "@mui/material/Button";

const Navbar = () => {
  const navlink = (
    <>
      <li className="text">
        <Link>Home</Link>
      </li>
      <li className="text">
        <Link>Service</Link>
      </li>

      <li className="text">
        <Link>software </Link>
      </li>
      <li className="text">
        <Link>Courses</Link>
      </li>
    </>
  );
  return (
    <div className=" top-0 fixed w-full bg-[#EDECFA] z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlink}
            </ul>
          </div>
          <div className="flex items-center gap-2 ">
            <img className="w-20  h-20" src={Logo} alt="Logo" />
            <p className="text-2xl font-bold hidden lg:block ">CyberZeist</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost w-24 h-24 btn-circle avatar"
            >
              <div className="w-16 rounded-full">
                <img className="w-full" src={Logos} alt="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
          <Link to="/register">
            {" "}
            <Button className="button Buttons">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
