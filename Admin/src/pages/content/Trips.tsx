import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../components/Layouts/Spinner/Spinner";
import TripCard from "../../components/Trip/TripCard";
import { TripContext } from "../../Context/Trip";
import { TripState } from "../../types";
import Empty from "../../components/Trip/Empty";
import ReactPaginate from "react-paginate";
import "../../App.css";
import Add from "../../components/Trip/Add";

const Trips = () => {
  const {
    trips,
    getTrips,
    loading,
    empty,
    showModalAdd,
    closeModalAdd,
    displayModalAdd,
  }: any = useContext(TripContext);

  //**********Pagination ******/
  const [pageNumber, setPageNumber] = useState(0);
  const tripsPerPage = 5;
  const pagesVisited = pageNumber * tripsPerPage;
  const pageCount = Math.ceil(trips?.length / tripsPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  //************************* */

  useEffect(() => {
    getTrips();
  }, []);
  return (
    <>
      <div className="flex overflow-hidden bg-white pt-16">
        <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <div className="flex flex-col my-2 mx-4 rounded-2xl shadow-xl shadow-gray-200">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {empty ? (
                  <Empty empty={empty} />
                ) : (
                  <>
                    <div className="p-4">
                      <button
                        onClick={displayModalAdd}
                        className="my-1 w-[130px] text-white bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-[1.02] transition-transform"
                      >
                        Add new trip
                      </button>
                      {showModalAdd && (
                        <>
                          <Add closeModalAdd={closeModalAdd} />
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      )}
                    </div>
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
                                  #
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
                              <>
                                {trips
                                  ?.slice(
                                    pagesVisited,
                                    pagesVisited + tripsPerPage
                                  )
                                  .map((trip: TripState, index: number) => (
                                    <TripCard
                                      key={trip._id}
                                      trip={trip}
                                      index={index}
                                    />
                                  ))}
                              </>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {trips?.length > 5 && (
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                      />
                    )}
                  </>
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
