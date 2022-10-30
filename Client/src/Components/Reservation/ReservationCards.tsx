import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ReservationDetails from "./ReservationDetails";
const ReservationCards = () => {
  return (
    <div className="bg-[rgb(244,243,255)] flex flex-col space-y-6 px-20 py-12 mx-auto justify-center items-center h-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-extrabold text-[37.9444px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          My Reservations
        </h1>
        <button
          type="button"
          className="bg-emerald-500 rounded-full bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 inline-flex items-center "
        >
          <AiOutlinePlus className="mr-1 -ml-4 w-8 h-6" />
          Pay anouther Tickets
        </button>{" "}
      </div>
      <ReservationDetails/>
    </div>
  );
};

export default ReservationCards;
