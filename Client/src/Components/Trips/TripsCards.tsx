import React, { useState } from "react";
import Trip from "./Trip";
import ModalTrip from "./ModalTrip";
const TripsCards = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  return (
    <div className="space-y-6 max-w-full mx-auto w-full p-6 text-black">
      <Trip setShowModal={setShowModal}/>
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
