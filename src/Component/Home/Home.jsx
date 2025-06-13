import React from "react";
import Bannar from "../Bannar/Bannar";
import Services from "../Pages/Services";
import Video from "../Pages/Video";
import Course from "../Pages/Course";
import Shop from "../Pages/Shop";
import Paralax from "../Pages/Paralax";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Services />
      <Video />
      <Course />
      <Paralax />
      <Shop />
    </div>
  );
};

export default Home;
