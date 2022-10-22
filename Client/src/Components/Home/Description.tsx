import React from "react";
import casa from "../../assets/casa.webp";

const Description = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-3xl font-bold">
            ABOUT{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
              MERKOB
            </span>
          </h2>
          <p className="py-4">
            The Merkob company is a subsidiary of the ONCF group which provides
            continuations by coach for cities not served by train. Thanks to its
            wide network of agencies, Supratours is represented in all regions
            of Morocco. Merkob has a fleet of high-end, comfortable and secure
            coaches
          </p>
        </div>
      </div>

      <div>
        <img className="w-full h-full object-cover" src={casa} alt="/" />
      </div>
    </div>
  );
};

export default Description;
