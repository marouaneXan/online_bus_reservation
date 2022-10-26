import React, { useContext } from "react";
import Description from "../Components/Home/Description";
import Destinations from "../Components/Home/Destination";
import Hero from "../Components/Home/Hero";
import Selects from "../Components/Home/Selects";
import SpinnerTrip from "../Components/Layouts/Spinner/SpinnerTrip";
import { TripContext } from "../Context/TripContext";

const Home = () => {
  const { loading }: any = useContext(TripContext);
  return (
    <>
      {loading && <SpinnerTrip />}
      <Hero />
      <Destinations />
      <Description />
      <Selects />
    </>
  );
};

export default Home;
