import React,{useContext} from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Bus } from "../../types";
import { BusContext } from "../../Context/Car";
interface Prop{
  bus:Bus
}

const BusCard = (props:Prop) => {
  const {deleteBus}:any=useContext(BusContext)
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
        <div className="text-base font-semibold text-gray-900">{props.bus.car_name}</div>
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
      <>{props.bus.nbr_places}</>
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
        image
      </td>
      <td className="p-4 flex items-center mt-1 space-x-4 whitespace-nowrap lg:p-5">
        <AiFillDelete onClick={()=>{deleteBus(props.bus._id)}} className="text-[18px] cursor-pointer" />
        {/* <GrEdit className="text-[18px] cursor-pointer" /> */}
      </td>
    </tr>
  );
};

export default BusCard;
