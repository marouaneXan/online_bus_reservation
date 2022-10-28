import React, { useContext, useEffect } from "react";
import SpinnerTrip from "../Components/Layouts/Spinner/SpinnerTrip";
import FilterTrips from "../Components/Trips/FilterTrips";
import Hero from "../Components/Trips/Hero";
import { useNavigate } from "react-router-dom";
import TripsCards from "../Components/Trips/TripsCards";
import { TripContext } from "../Context/TripContext";

const Trips = () => {
  const navigate = useNavigate();
  const { loading, trips }: any = useContext(TripContext);
  // useEffect(() => {
  //   trips.length<0 ? navigate("/") : "";
  // }, [trips.length]);
  return (
    <>
      <Hero />
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row px-4 py-16">
        <FilterTrips />
        {loading && <SpinnerTrip />} <TripsCards />
      </div>
    </>
  );
};

export default Trips;
