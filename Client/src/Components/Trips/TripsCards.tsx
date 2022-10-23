import React, { useState } from "react";
import casablanca from "../../assets/casa.webp";
import { BsClockHistory } from "react-icons/bs";
import { BiBus } from "react-icons/bi";
const TripsCards = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  return (
    <div className="space-y-6 max-w-full mx-auto w-full p-6 text-black">
      <div className=" w-full lg:max-w-full lg:flex">
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
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 bg-gray-200 flex p-1 rounded-full items-center">
              Company name
            </p>
            <div className="flex space-x-4 md:space-x-6 items-center">
              <div className="flex flex-col md:p-2 mt-5">
                <h1 className="text-xl md:text-[22px] font-bold text-center">
                  21:22
                </h1>
                <p className="text-center text-gray-500 font-bold">Safi</p>
              </div>
              <div className="inline-flex justify-center items-center w-full">
                <hr className="my-2 h-[2px] w-[150px] md:w-60 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                <div className="absolute  px-4 bg-white">
                  <BsClockHistory />
                </div>
              </div>
              <div className="flex flex-col md:p-2 mt-5">
                <h1 className="text-xl md:text-[22px] font-bold text-center">
                  21:22
                </h1>
                <p className="text-center text-gray-500 font-bold">
                  Casablanca
                </p>
              </div>
            </div>
            <p className="text-center text-gray-500 font-semibold">
              From <span className="font-bold text-gray-600">Safi</span> to{" "}
              <span className="font-bold text-gray-600">Casablance</span>
            </p>
          </div>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:rounded-r lg:border-gray-400 bg-white p- md:px-6 md:pt-12 flex flex-col items-center space-y-6 leading-normal">
          <h1 className="text-xl md:text-[22px] font-bold text-center">81DH</h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 w-full border bg-gradient-to-r text-white rounded-md from-[#5651e5] to-[#709dff]"
          >
            Book
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <p className="text-[22px] text-gray-500 font-bold">
                    From <span className="text-[26px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Safi</span>{" "}
                    to{" "}
                    <span className="text-[26px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                      Casablance
                    </span>
                  </p>
                </div>
                {/*body*/}
                <div className="relative p-8 flex md:space-x-32">
                  <div>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                      <li className="mb-10 ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-2 ring-white dark:ring-gray-900">
                          <BiBus />
                        </span>
                        <div className="flex space-x-4 ml-2 items-center">
                          <p className="text-xl md:text-[18px] font-bold">
                            Safi
                          </p>
                          <h3 className="text-xl md:text-[18px] font-bold">
                            12:12
                          </h3>
                        </div>
                      </li>
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
                    <p className="font-semibold">Price: <span className="font-bold text-[#5651e5]">80DH</span></p>
                    <p className="font-semibold">Number of places: <span className="font-bold text-[#5651e5]">50</span></p>
                    <p className="font-semibold">Bus name: <span className="font-bold text-[#5651e5]">Asfor</span></p>
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
                  <button
                    className="bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TripsCards;
