import React, { useContext } from "react";
import casablanca from "../../assets/casa.webp";
import { BiBus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { TripContext } from "../../Context/TripContext";
import { AuthContext } from "../../Context/AuthContext";

const ModalTrip = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const { trip, makeReservation }: any = useContext(TripContext);
  const { connected }: any = useContext(AuthContext);
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
            <p className="text-[22px] text-gray-500 font-bold">
              From{" "}
              <span className="text-[26px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                {trip?.departure_city}
              </span>{" "}
              to{" "}
              <span className="text-[26px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                {trip?.arrival_city}
              </span>
            </p>
          </div>
          {/*body*/}
          <div className="relative p-8 flex md:space-x-32">
            <div>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <>
                  {trip?.break_point.map((b: any) => (
                    <li key={b._id} className="mb-10 ml-6">
                      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-2 ring-white dark:ring-gray-900">
                        <BiBus />
                      </span>
                      <div className="flex space-x-4 ml-2 items-center">
                        <p className="text-xl md:text-[18px] font-bold">
                          {b?.city_name}
                        </p>
                        <h3 className="text-xl md:text-[18px] font-bold">
                          {b?.arrival_time}
                        </h3>
                      </div>
                    </li>
                  ))}
                </>
              </ol>
            </div>
            <div className="flex flex-col">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                title="Mountain"
              >
                <img
                  className="w-full h-full object-cover"
                  src={casablanca}
                  alt="/"
                />
              </div>
              <p className="font-semibold">
                Price:{" "}
                <span className="font-bold text-[#5651e5]">
                  {trip?.price}DH
                </span>
              </p>
              <p className="font-semibold">
                Number of places:{" "}
                <span className="font-bold text-[#5651e5]">
                  {trip?.car?.nbr_places}
                </span>
              </p>
              <p className="font-semibold">
                Bus name:{" "}
                <span className="font-bold text-[#5651e5]">
                  {trip?.car?.car_name}
                </span>
              </p>
            </div>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            {connected ? (
              <button
                className="bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() =>
                  makeReservation(trip?._id, localStorage?.getItem("client_id"))
                }
              >
                book now
              </button>
            ) : (
              <Link
                className="bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                to="/register"
              >
                book now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTrip;
