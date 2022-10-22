import React from "react";
import FilterTrips from "../Components/Trips/FilterTrips";
import Hero from "../Components/Trips/Hero";

const Trips = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <FilterTrips />
      </div>
    </div>
  );
};

export default Trips;
