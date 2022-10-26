import React,{useContext} from "react";
import casablanca from "../../assets/casa.webp";
import { BsClockHistory } from "react-icons/bs";
import { Tripe } from '../../Types/Trip';
import { TripContext } from "../../Context/TripContext";
const Trip = ({
  setShowModal,
  trip,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<Boolean>>;
  trip: Tripe;
}) => {
  const {getTripDetails}:any=useContext(TripContext)
  return (
    <div className=" w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Mountain"
      >
        <img className="w-full h-full object-cover" src={casablanca} alt="/" />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 bg-gray-200 flex p-2 w-[120px] rounded text-center">
            {trip.company.company_name}
          </p>
          <div className="flex space-x-4 md:space-x-6 items-center">
            <div className="flex flex-col md:p-2 mt-5">
              <h1 className="text-xl md:text-[22px] font-bold text-center">
                {trip.departure_time}
              </h1>
              <p className="text-center text-gray-500 font-bold">
                {trip.departure_city}
              </p>
            </div>
            <div className="inline-flex justify-center items-center w-full">
              <hr className="my-2 h-[2px] w-[150px] md:w-60 bg-gray-200 rounded border-0 dark:bg-gray-700" />
              <div className="absolute  px-4 bg-white">
                <BsClockHistory />
              </div>
            </div>
            <div className="flex flex-col md:p-2 mt-5">
              <h1 className="text-xl md:text-[22px] font-bold text-center">
                {trip.arrival_time}
              </h1>
              <p className="text-center text-gray-500 font-bold">
                {trip.arrival_city}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-gray-500 font-semibold">
              From{" "}
              <span className="font-bold text-gray-600">
                {trip.departure_city}
              </span>{" "}
              to{" "}
              <span className="font-bold text-gray-600">
                {trip.arrival_city}
              </span>
            </p>
            <p className="text-center text-gray-500 font-semibold">
              {trip.distance} KM
            </p>
          </div>
        </div>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:rounded-r lg:border-gray-400 bg-white p- md:px-6 md:pt-12 flex flex-col items-center space-y-6 leading-normal">
        <h1 className="text-xl md:text-[22px] font-bold text-center">
          {trip.price}DH
        </h1>
        <button
          onClick={() => {getTripDetails(trip._id),setShowModal(true)}}
          className="px-6 py-2 w-full border bg-gradient-to-r text-white rounded-md from-[#5651e5] to-[#709dff]"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Trip;
