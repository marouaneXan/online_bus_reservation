import React from "react";
import FilterTrips from "../Components/Trips/FilterTrips";
import Hero from "../Components/Trips/Hero";
import TripsCards from "../Components/Trips/TripsCards";

const Trips = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row px-4 py-16">
        <FilterTrips />
      <TripsCards/>
      </div>
    </div>
  );
};

export default Trips;
