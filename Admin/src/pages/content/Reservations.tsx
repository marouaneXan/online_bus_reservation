import React, { useContext } from "react";
import ReservationCard from "../../components/Reservation/ReservationCard";
import { ReservationContext } from "../../Context/Reservation";
import { Reservation } from "../../types";

const Reservations = () => {
  const { reservations }: any = useContext(ReservationContext);
  console.log(reservations)
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
                        Client name
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Reservation date
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Reservation time
                      </th>
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
                        Price
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
                    {reservations?.map((reservation:Reservation) => (
                      <ReservationCard key={reservation._id} reservation={reservation} />
                    ))}
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

export default Reservations;
