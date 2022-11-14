import React, { useContext, useEffect } from "react";
import BusCard from "../../components/Bus/BusCard";
import { Bus } from "../../types";
import { BusContext } from "../../Context/Car";
import Spinner from "../../components/Layouts/Spinner/Spinner";
import Empty from "../../components/Trip/Empty";
import Add from "../../components/Bus/Add";

const Buses = () => {
  const {
    buses,
    getBuses,
    loading,
    empty,
    showModalAdd,
    closeModalAdd,
    displayModalAdd,
  }: any = useContext(BusContext);
  useEffect(() => {
    getBuses();
  }, []);

  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {empty ? (
                <Empty content="Bus" empty={empty} />
              ) : (
                <>
                  <button
                    onClick={displayModalAdd}
                    className="my-2 w-[130px] text-white bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-[1.02] transition-transform"
                  >
                    Add new trip
                  </button>
                  {showModalAdd && (
                    <>
                      <Add closeModalAdd={closeModalAdd} />
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  )}
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
                                Bus name
                              </th>
                              <th
                                scope="col"
                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                              >
                                Places
                              </th>
                              <th
                                scope="col"
                                className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                              >
                                Bus image
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
                            {buses?.map((bus: Bus) => (
                              <BusCard key={bus._id} bus={bus} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buses;
