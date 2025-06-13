import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

const Shop = () => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    fetch("Fakdata.json")
      .then((res) => res.json())
      .then((data) => setShop(data.slice(0, 6)));
  }, []);

  return (
    <div className="bg-gray-50 w-11/12 mx-auto">
      <p className="text-3xl font-bold text-center pt-10 pb-10 animate__animated animate__backInLeft">
        Shop
      </p>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shop.map((datae) => (
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
      }
    </div>
  );
};

export default Shop;
