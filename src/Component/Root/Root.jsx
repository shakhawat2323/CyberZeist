import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Pages/Footer";

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
      {HiddensNavandFoot || <Footer />}
    </div>
  );
};

export default Root;
