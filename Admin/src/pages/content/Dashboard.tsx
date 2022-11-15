import React, { useContext } from "react";
import { StatisticCard } from "../../constant/StatisticCard";
import { ReservationContext } from "../../Context/Reservation";

const Dashboard = () => {
  const {statistics,reservations}:any=useContext(ReservationContext)
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <div className="px-4 pt-6">
          <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4">
            {StatisticCard.map((statistic, index) => (
              <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
                <div key={index} className="flex items-center">
                  <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-lg shadow-md shadow-gray-300">
                    <statistic.icon className="text-[20px]" />
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <span className="text-2xl font-bold leading-none text-gray-900">
                      {statistic.content==="Today's Money" && (<>{statistics?.today_money}DH</>)}
                      {statistic.content==="New Clients" && (<>{statistics?.today_clients}</>)}
                      {statistic.content==="Reservations" && (<>{statistics?.today_reservations}</>)}
                      {statistic.content==="Sales" && (<>{reservations?.length ? reservations?.length :"0"}</>)}
                    </span>
                    <h3 className="text-base font-normal text-gray-500">
                      {statistic.content}
                    </h3>
                  </div>
                  <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
                    +{statistic.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
