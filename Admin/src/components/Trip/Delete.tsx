import React, { useContext } from "react";
import { TripContext } from "../../Context/Trip";
interface Prop {
  message: string;
  close: () => void;
  trip_id:string
}
const Delete = (props: Prop) => {
  const {deleteTrip}:any=useContext(TripContext)
  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 sm:h-full">
      <div className="relative px-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-2xl shadow-lg">
          <div className="flex justify-end p-2">
            <button
              onClick={props.close}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="delete-product-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            <svg
              className="mx-auto w-20 h-20 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mt-5 mb-6 text-xl font-normal text-gray-500">
              Are you sure you want to delete this {props.message}?
            </h3>
            <button
            type="button"
              onClick={()=>{deleteTrip(props.trip_id)}}
              className="text-white bg-gradient-to-br from-red-400 to-red-600 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={props.close}
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center hover:scale-[1.02] transition-transform"
              data-modal-toggle="delete-product-modal"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
