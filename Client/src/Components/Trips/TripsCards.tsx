import React, { useState,useContext } from "react";
import Trip from "./Trip";
import ModalTrip from "./ModalTrip";
import { TripContext } from '../../Context/TripContext';
const TripsCards = () => {
  const {trips}:any=useContext(TripContext)
  console.log(trips);
  const [showModal, setShowModal] = useState<Boolean>(false);
  return (
    <div className="space-y-6 max-w-full mx-auto w-full p-6 text-black">
      {trips && trips.map((trip:any)=>(
        <Trip setShowModal={setShowModal} key={trip._id} trip={trip}/>
      ))}
      {showModal ? (
        <>
          <ModalTrip setShowModal={setShowModal}/>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TripsCards;
