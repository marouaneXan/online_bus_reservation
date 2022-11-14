import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Reservation } from "../../types";
interface Prop {
  reservation: Reservation;
}

const ReservationCard = (props:Prop) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
        <div className="text-base font-semibold text-gray-900">{props.reservation?.client?.nom}</div>
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.reservation?.reservation_date}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {props.reservation?.reservation_time}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {props.reservation?.trip?.departure_city}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {props.reservation?.trip?.arrival_city}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {props.reservation?.trip?.price}
      </td>
      <td className="p-4 flex items-center mt-1 space-x-2 whitespace-nowrap lg:p-5">
        <AiFillDelete className="text-[18px] cursor-pointer" />
        <GrEdit className="text-[18px] cursor-pointer" />
      </td>
    </tr>
  );
};

export default ReservationCard;
