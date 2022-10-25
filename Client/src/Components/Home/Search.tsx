import React,{useContext,useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Formik, Form } from "formik";
import TextField from "../Formik/TextField";
import { SearchTripSchema } from "../../Validation/SearchTrip";
import { TripContext } from "../../Context/TripContext";

const Search = () => {
  const {searchTrips}:any=useContext(TripContext)
  const values: object = {
    departure_city: "",
    arrival_city: "",
    departure_date: "",
  };
  const onSubmit = (values:object) => {
    const {...data}=values
    searchTrips(data)
  };
  

  return (
    <Formik
      initialValues={values}
      validationSchema={SearchTripSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form
          className="flex flex-col space-y-6 space-x-6 justify-between items-center max-w-[800px] mx-auto w-full border py-4 px-8
          rounded-md text-black bg-gray-100/90 md:flex-row md:space-y-0"
        >
          <TextField
            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
            name="departure_city"
            type="text"
            placeholder="From"
          />
          <TextField
            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
            name="arrival_city"
            type="text"
            placeholder="To"
          />
          <TextField
            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none"
            placeholder="Check in"
            type="date"
            name="departure_date"
          />
          <button type="submit" className="p-3 w-full md:w-[50px] border bg-gradient-to-r text-white rounded-md from-[#5651e5] to-[#709dff]">
            <AiOutlineSearch
              size={20}
              className="icon text-2xl cursor-pointer"
              style={{ color: "#ffffff" }}
            />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
