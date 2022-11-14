import React,{useContext} from "react";
import { useLocation } from "react-router-dom";
import { BusContext } from "../../Context/Car";
interface Prop {
  empty: string;
  content?: string;
}

const Empty = (props: Prop) => {
  const {displayModalAdd}:any=useContext(BusContext)
  const location = useLocation();
  return (
    <div className="h-[32rem] flex flex-col space-y-2 justify-center items-center">
      <p className=" text-xl md:text-2xl font-semibold text-blue-600">
        {props.empty}
      </p>
      {location.pathname === "/buses" && (
        <button onClick={displayModalAdd} className="my-1 w-[130px] text-white bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-[1.02] transition-transform">
          Add new {props.content}
        </button>
      )}
    </div>
  );
};

export default Empty;
