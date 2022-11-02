import React, { useContext } from "react";
import { TripContext } from "../../Context/TripContext";

const ModalDelete = ({
  setShowModalDelete,
  reservation_id,
  trip_id,
  client_id,
}: {
  setShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  reservation_id: string;
  trip_id: string;
  client_id: string;
}) => {
  const { cancelReservation }: any = useContext(TripContext);
  const handleCancelReservation = () => {
    cancelReservation(reservation_id, trip_id, client_id);
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-shadow fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="text-center p-5 border-b border-solid border-slate-200 rounded-t">
            <p className="text-[22px] text-red-500 font-bold"></p>
          </div>
          {/*body*/}
          <div className="relative p-8 flex md:space-x-32">
            <p className="text-[22px] text-gray-500 font-bold">
              Are You sure you want to cancel this reservation
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModalDelete(false)}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleCancelReservation}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
