import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Client } from "../../types";
interface Prop {
  client: Client;
}

const ClientCard = (props: Prop) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
        <div className="text-base font-semibold text-gray-900">
          {props.client.genre}
        </div>
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.nom}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.prenom}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.email}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.date_naissance}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.tel}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.adress}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.ville}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        {props.client.nationalite}
      </td>
      <td className="p-4 flex items-center mt-1 space-x-2 whitespace-nowrap lg:p-5">
        <AiFillDelete className="text-[18px] cursor-pointer" />
      </td>
    </tr>
  );
};

export default ClientCard;
