import React from "react";
import Videos from "../../assets/Video/Video.mp4";
import { ReactMatrixAnimation } from "react-matrix-animation";

const Video = () => {
  return (
    <div className="relative w-full  overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 z-0">
        <ReactMatrixAnimation />
      </div>

      {/* Foreground Video Card */}
      <div className="relative z-10 flex items-center justify-center min-h-[300px] lg:min-h-[600px] px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-black bg-opacity-50">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Videos} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
