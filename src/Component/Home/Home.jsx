import React from "react";
import Bannar from "../Bannar/Bannar";
import Services from "../Pages/Services";
import Video from "../Pages/Video";
import Course from "../Pages/Course";
import Shop from "../Pages/Shop";
import Paralax from "../Pages/Paralax";
import HeroSection from "../Pages/HeroSection";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Services />
      <Video />

      <Shop />
      <Paralax />
      <HeroSection />
    </div>
  );
};

export default Home;
