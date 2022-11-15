import React, { useContext, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { TripState } from "../../types";
import Delete from "./Delete";
import { TripContext } from "../../Context/Trip";
import Update from "../../components/Trip/Update";
interface Prop {
  trip: TripState;
  index: number;
}

const TripCard = (props: Prop) => {
  const {
    showModalDelete,
    closeModalDelete,
    displayModalDelete,
    displayModalUpdate,
    showModalUpdate,
    closeModalUpdate,
  }: any = useContext(TripContext);
  return (
    <>
      {showModalDelete && (
        <>
          <Delete
            trip_id={props.trip._id}
            close={closeModalDelete}
            message="Trip"
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      {showModalUpdate && (
        <>
          <Update closeModalUpdate={closeModalUpdate} trip_id={props.trip._id} />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      <tr className="hover:bg-gray-100">
        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
          <div className="text-base font-semibold text-gray-900">
            {props.index + 1}
          </div>
        </td>
        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
          <div className="text-base font-semibold text-gray-900">
            {props.trip?.departure_city}
          </div>
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip?.arrival_city}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip?.departure_date}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip?.departure_time}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip.company.company_name}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip.arrival_time}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip?.car?.car_name}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          eljadida marrakech
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip?.price}DH
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.trip?.distance}km
        </td>
        <td className="p-4 flex items-center mt-1 space-x-2 whitespace-nowrap lg:p-5">
          <AiFillDelete
            className="text-[18px] cursor-pointer"
            onClick={displayModalDelete}
          />
          <GrEdit
            onClick={displayModalUpdate}
            className="text-[18px] cursor-pointer"
          />
        </td>
      </tr>
    </>
  );
};

export default TripCard;
