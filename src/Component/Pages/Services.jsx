import "animate.css";

import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom"; // Fix: use react-router-dom

const Services = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-[#bdd5f3b3] py-10">
      <div className="w-11/12 mx-auto">
        <p className="text-3xl font-bold text-center mb-8 animate__animated animate__backInLeft">
          Our Services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {datas.map((datae) => (
            <Zoom key={datae.id} triggerOnce>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between h-full transition-transform hover:scale-[1.03] duration-300">
                <img
                  src={datae.image}
                  alt={datae.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {datae.title}
                  </h2>
                  <p className="text-sm text-gray-600 flex-grow">
                    {datae.description}
                  </p>
                  <div className="mt-4 text-right">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/" className="mt-5 flex items-center justify-center">
            <Button className=" btns  ">All Services</Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
