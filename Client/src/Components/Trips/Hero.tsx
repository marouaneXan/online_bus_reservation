import React from "react";
import bus from "../../assets/bus.webp";
import Search from "../Home/Search";

const Hero = () => {
  return (
    <div className="w-full h-[400px] relative">
      <img className="w-full h-[400px] object-cover" src={bus} />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full space-y-4 flex flex-col justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Your Trip from{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Safi
          </span>{" "}
          to{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Casa
          </span>
        </h1>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
