import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { TripState } from "../../types";
import Delete from "./Delete";
interface Prop {
  trip: TripState;
  showModalDelete: boolean;
  setShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const TripCard = (props: Prop) => {
  //Close modall delete
  const closeModalDelete = () => {
    props.setShowModalDelete(false);
  };
  //show modall delete
  const displayModalDelete = () => {
    props.setShowModalDelete(true);
  };
  //delete 
  const deletee=()=>{

  }
  return (
    <tr className="hover:bg-gray-100">
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
        {props.showModalDelete && (
          <>
            <Delete trip_id={props.trip._id} close={closeModalDelete} message="Trip" />
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
        <GrEdit className="text-[18px] cursor-pointer" />
      </td>
    </tr>
  );
};

export default TripCard;
