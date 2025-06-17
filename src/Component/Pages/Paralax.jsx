import React from "react";
import ParalasLogo from "../../assets/Logo/Syber.jpg";

const Paralax = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover mt-10 mb-10"
      style={{
        backgroundImage: `url(${"../../assets/Img/10013.jpg"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-6">
        {/* Image */}
        <div className="flex justify-center">
          <img
            className="w-60 md:w-80 lg:w-[400px] rounded-xl shadow-lg"
            src={ParalasLogo}
            alt="Logo"
          />
        </div>

        {/* Text */}
        <div className="text-white md:w-7/12 text-center md:text-left">
          <p className="text-lg md:text-xl leading-relaxed font-sans">
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
