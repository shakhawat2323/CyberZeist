import React from "react";
import Bannar from "../Bannar/Bannar";
import Services from "../Pages/Services";
import Video from "../Pages/Video";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Services />
      <Video />
    </div>
  );
};

export default Home;
