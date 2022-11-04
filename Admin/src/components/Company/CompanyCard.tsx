import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const CompayCard = () => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
        <div className="text-base font-semibold text-gray-900">CTM</div>
      </td>
      <td className="p-4 flex items-center justify-between mt-1 space-x-2 whitespace-nowrap lg:p-5">
        <AiFillDelete className="text-[18px] cursor-pointer" />
        <GrEdit className="text-[18px] cursor-pointer" />
      </td>
    </tr>
  );
};

export default CompayCard;
