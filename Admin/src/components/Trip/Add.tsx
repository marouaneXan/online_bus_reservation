import React, { useContext, useEffect } from "react";
import { Formik, Form, FieldArray } from "formik";
import TextField from "../Formik/TextField";
import { tripSchema } from "../../Validation/Trip";
import { Company, TripState } from "../../types";
// import SelectField from "../Formik/SelectField";
import { CompanyContext } from "../../Context/Company";
import { BusContext } from "../../Context/Car";
import { Bus } from "../../types";
import { TripContext } from "../../Context/Trip";
interface Prop {
  closeModalAdd: () => void;
}

const Add = (props: Prop) => {
  const { companies, getCompanies }: any = useContext(CompanyContext);
  const { buses, getBuses }: any = useContext(BusContext);
  const { addTrip }: any = useContext(TripContext);
  useEffect(() => {
    getCompanies();
    getBuses();
  }, []);
  const values:any = {
    departure_city: "",
    arrival_city: "",
    departure_date: "",
    departure_time: "",
    company: "",
    arrival_time: "",
    car: "",
    // break_point: [
    //   {
    //     arrival_time: "",
    //     city_name: "",
    //   },
    // ],
    price: "",
    distance: "",
  };
  const onSubmit = (values: any) => {
    const {...data}=values
    addTrip(values.car,values.company,data)
  };
  return (
    <Formik
      initialValues={values}
      validationSchema={tripSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div className="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full">
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-2xl shadow-lg">
              <div className="flex justify-between items-start p-5 rounded-t border-b">
                <h3 className="text-xl font-semibold">Add trip</h3>
                <button
                  onClick={props.closeModalAdd}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-toggle="add-product-modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <Form className="px-6 py-2 space-y-6">
                <div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <TextField
                        label="From"
                        name="departure_city"
                        type="text"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextField label="To" name="arrival_city" type="text" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextField
                        label="Departure date"
                        name="departure_date"
                        id="Departure date"
                        type="date"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextField
                        label="Departure time"
                        name="departure_time"
                        id="Departure time"
                        type="time"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextField
                        label="Arrival time"
                        name="arrival_time"
                        id="Arrival time"
                        type="time"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="companies"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Select an option
                      </label>
                      <select
                        onChange={formik.handleChange}
                        name="company"
                        id="companies"
                        className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                      >
                        <option selected disabled>
                          Choose a company
                        </option>
                        {companies?.map((company: Company) => (
                          <option key={company._id} value={company._id}>
                            {company.company_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="car"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Select an option
                      </label>
                      <select
                        onChange={formik.handleChange}
                        name="car"
                        id="car"
                        className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                      >
                        <option selected disabled>
                          Choose a car
                        </option>
                        {buses?.map((bus: Bus) => (
                          <option key={bus._id} value={bus._id}>
                            {bus.car_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextField
                        label="Price"
                        name="price"
                        id="Price"
                        type="number"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextField
                        label="Distance"
                        name="distance"
                        id="Distance"
                        type="number"
                      />
                    </div>
                    {/* <FieldArray name="break_point">
                      {(arrayHelper) => (
                        <>
                          <button
                          type="button"
                            onClick={() => {
                              arrayHelper.push({
                                arrival_time:"",
                                city_name:""
                              })
                            }}
                            className="text-white bg-slate-700 font-medium rounded-lg text-sm px-2 py-1 text-center"
                          >
                            Add
                          </button>
                          {values.break_point.map((item, index) => {
                            return (
                              <div
                                className="col-span-6 sm:col-span-3 space-x-2 flex"
                              >
                                <div className="w-full">
                                  <TextField
                                    label="City"
                                    name={`break_point.${index}.city_name`}
                                    id="City"
                                    type="text"
                                  />
                                </div>
                                <div className="w-full">
                                  <TextField
                                    label="Arrival time"
                                    name={`break_point.${index}.arrival_time`}
                                    id="Arrival time"
                                    type="time"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </FieldArray> */}
                  </div>
                </div>
                <div className="p-6 rounded-b border-t border-gray-200">
                  <button
                    className="text-white font-medium text-sm px-5 py-2.5 text-center rounded-lg bg-gradient-to-br from-pink-500 to-voilet-500 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                    type="submit"
                  >
                    Add trip
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Add;
