import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const Trips = () => {
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
          <div className="overflow-x-auto rounded-2xl">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Departure date
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Departure time
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Arrival time
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Bus
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Break points
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Distance
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                        <div className="text-base font-semibold text-gray-900">
                          Safi
                        </div>
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        Casa
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        2022-02-12
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        00:00
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        CTM
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        02:00
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        Safari
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        eljadida marrakech
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        123$
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        123km
                      </td>
                      <td className="p-4 flex items-center justify-between mt-1 space-x-2 whitespace-nowrap lg:p-5">
                        <AiFillDelete className="text-[18px] cursor-pointer" />
                        <GrEdit className="text-[18px] cursor-pointer"  />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
