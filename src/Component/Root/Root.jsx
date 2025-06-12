import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
