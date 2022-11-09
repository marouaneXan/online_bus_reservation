import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../components/Layouts/Spinner/Spinner";
import TripCard from "../../components/Trip/TripCard";
import { TripContext } from "../../Context/Trip";
import { TripState } from "../../types";
import Empty from "../../components/Trip/Empty";

const Trips = () => {
  const { trips, getTrips, loading, empty }: any = useContext(TripContext);
  useEffect(() => {
    getTrips();
  }, []);
  return (
    <>
      <div className="flex overflow-hidden bg-white pt-16">
        <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {empty ? (
                  <Empty empty={empty} />
                ) : (
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
                            {trips?.map((trip: TripState) => (
                              <TripCard key={trip._id} trip={trip} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trips;
