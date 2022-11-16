import React,{useContext} from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { CompanyContext } from "../../Context/Company";
import { Company } from "../../types";
interface Prop{
  company:Company
}

const CompayCard = (props:Prop) => {
  const {deleteCompany}:any=useContext(CompanyContext)
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
        <div className="text-base font-semibold text-gray-900">{props.company.company_name}</div>
      </td>
      <td className="p-4 flex items-center mt-1 space-x-2 whitespace-nowrap lg:p-5">
        <AiFillDelete onClick={()=>{deleteCompany(props.company._id)}} className="text-[18px] cursor-pointer" />
        {/* <GrEdit className="text-[18px] cursor-pointer" /> */}
      </td>
    </tr>
  );
};

export default CompayCard;
