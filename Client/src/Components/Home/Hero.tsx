import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
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
        <form
          className="flex flex-col space-y-6 justify-between items-center max-w-[800px] mx-auto w-full border p-8
          rounded-md text-black bg-gray-100/90 md:flex-row md:space-y-0"
        >
          <input
            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
            type="text"
            placeholder="From"
          />
          <input
            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
            type="text"
            placeholder="To"
          />
          <input
            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
            placeholder="Check in"
          />
          <button className="p-3 w-full md:w-[50px] border bg-gradient-to-r text-white rounded-md from-[#5651e5] to-[#709dff]">
            <AiOutlineSearch
              size={20}
              className="icon text-2xl cursor-pointer"
              style={{ color: "#ffffff" }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
