import React from "react";
import Search from "./Search";
import busVid from "../../assets/landing_page_vd.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={busVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold">First Class Travel</h1>
        <h2 className="py-4 text-3xl font-bold">Top 1% Locations Worldwide</h2>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
