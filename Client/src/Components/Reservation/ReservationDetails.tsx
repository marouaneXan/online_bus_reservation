import React, { useContext,useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { TripContext } from "../../Context/TripContext";

const ReservationDetails = ({reservation}:any) => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex justify-between items-center w-full text-[21.8181px] font-semibold">
        <h3 className="">
          <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-purple-400 to-blue-600">
            GO
          </span>{" "}
          {reservation.departure_date}
        </h3>
        <AiOutlineDelete className="text-red-500 cursor-pointer" />
      </div>
      <div className=" w-full lg:max-w-full lg:flex">
        <div className="border-r border-dashed border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <div className="mb-2">
            <p className="text-sm text-gray-600 bg-gray-200 p-2 rounded text-center">
              Bus name: ASSIR
            </p>
            <div className="flex space-x-4 md:space-x-6 items-center">
              <div className="flex flex-col md:p-2 mt-5">
                <h1 className="text-xl md:text-[22px] font-bold text-center">
                  {reservation.trip.departure_time}
                </h1>
                <p className="text-center text-gray-500 font-bold">
                  {reservation.trip.departure_city}
                </p>
              </div>
              <div className="inline-flex justify-center items-center w-full">
                <hr className="my-2 h-[2px] w-[150px]  md:w-60 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                <div className="absolute  px-4 bg-white">
                  <BsClockHistory />
                </div>
              </div>
              <div className="flex flex-col md:p-2 mt-5">
                <h1 className="text-xl md:text-[22px] font-bold text-center">
                  {reservation.trip.arrival_time}
                </h1>
                <p className="text-center text-gray-500 font-bold">
                  {reservation.trip.arrival_city}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-gray-500 font-semibold">
                From{" "}
                <span className="font-bold text-gray-600">
                  {reservation.trip.departure_city}
                </span>{" "}
                to{" "}
                <span className="font-bold text-gray-600">
                  {reservation.trip.arrival_city}
                </span>
              </p>
              <p className="text-center text-gray-500 font-semibold">
                {reservation.trip.distance} KM
              </p>
              <p className="text-center text-gray-500 font-semibold">
                ID: {reservation._id}
              </p>
            </div>
          </div>
        </div>
        <div className="border-r border-b border-l border-dashed border-gray-400 lg:border-l-0 lg:border-t lg:rounded-r lg:border-gray-400 bg-white p- md:px-6 md:pt-12 flex flex-col items-center space-y-6 leading-normal">
          <h1 className="text-xl md:text-[22px] font-bold text-center md:mt-10">
            {reservation.trip.price}DH
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetails;
