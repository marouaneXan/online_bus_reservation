import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Formik, Form } from "formik";
import TextField from "../Formik/TextField";

const Search = () => {
  const values:any={
    departure_city:"",
    arrival_city:"",
    departure_date:"",
  }
  return (
    <form
      className="flex flex-col space-y-6 justify-between items-center max-w-[800px] mx-auto w-full border p-8
          rounded-md text-black bg-gray-100/90 md:flex-row md:space-y-0"
    >
      <input
        className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
        type="text"
        placeholder="From"
      />
      <input
        className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
        type="text"
        placeholder="To"
      />
      <input
        className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
        placeholder="Check in"
      />
      <button className="p-3 w-full md:w-[50px] border bg-gradient-to-r text-white rounded-md from-[#5651e5] to-[#709dff]">
        <AiOutlineSearch
          size={20}
          className="icon text-2xl cursor-pointer"
          style={{ color: "#ffffff" }}
        />
      </button>
    </form>
  );
};

export default Search;
