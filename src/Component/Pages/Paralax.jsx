import React from "react";
import Paralas from "../../assets/Img/10013.jpg";
import ParalasLogo from "../../assets/Logo/Syber.jpg";
const Paralax = () => {
  return (
    <div className="mt-10 mb-10 bg-gray-500 Images">
      <div className="opacity-100"></div>
      <div className="flex!  justify-center! items-center! ml-52  py-8 px-16 gap-5">
        <div>
          <img className="w-[1500px]" src={ParalasLogo} alt="" />
        </div>
        <div>
          <p className="text-xl font-sans w-8/12 ">
            Cybersecurity is the strategy of protecting information and systems
            in the digital world. It protects personal, institutional, and
            financial data from hackers, malware, and intrusions. To stay safe
            on the internet, it is important to have knowledge of password
            management, software updates, and firewalls. This is essential in
            today's technology-dependent life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paralax;
