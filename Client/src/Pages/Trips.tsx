import React, { useContext } from "react";
import SpinnerTrip from "../Components/Layouts/Spinner/SpinnerTrip";
import FilterTrips from "../Components/Trips/FilterTrips";
import Hero from "../Components/Trips/Hero";
import TripsCards from "../Components/Trips/TripsCards";
import { TripContext } from "../Context/TripContext";

const Trips = () => {
  const { loading }: any = useContext(TripContext);
  return (
    <>
      <Hero />
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row px-4 py-16">
        <FilterTrips />
        {loading && <SpinnerTrip/>}  <TripsCards />
      </div>
    </>
  );
};

export default Trips;
