import React from "react";
import Videos from "../../assets/Video/Video.mp4";
const Video = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-5 bg-gradient-to-br ">
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <video
            className="w-full h-auto object-cover"
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
