import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { TripState } from "../../types";

const TripCard = ({trip}:any) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
        <div className="text-base font-semibold text-gray-900">{trip?.departure_city}</div>
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {trip?.arrival_city}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {trip?.departure_date}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {trip?.departure_time}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {trip.company.company_name}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {trip.arrival_time}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {trip?.car?.car_name}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        eljadida marrakech
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {trip?.price}DH
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      {trip?.distance}km
      </td>
      <td className="p-4 flex items-center mt-1 space-x-2 whitespace-nowrap lg:p-5">
        <AiFillDelete className="text-[18px] cursor-pointer" />
        <GrEdit className="text-[18px] cursor-pointer" />
      </td>
    </tr>
  );
};

export default TripCard;
