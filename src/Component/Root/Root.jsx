import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  const location = useLocation();
  const HiddensNavandFoot =
    location.pathname.includes("register") ||
    location.pathname.includes("login");
  console.log(Location);
  return (
    <div>
      {HiddensNavandFoot || <Navbar></Navbar>}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
