import { useContext } from "react";
import ClientCard from "../../components/Clients/ClientCard";
import { ClientContext } from "../../Context/Clients";
import { Client } from "../../types";
import Empty from "../../components/Trip/Empty";
import Spinner from "../../components/Layouts/Spinner/Spinner";

const Clients = () => {
  const { clients, loading, empty }: any = useContext(ClientContext);
  return (
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
                              Gendar
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              First name
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              Last name
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              Birthday
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              Phone
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              Adress
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              City
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                            >
                              Nationality
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
                          {clients?.map((client: Client) => (
                            <ClientCard key={client._id} client={client} />
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
  );
};

export default Clients;
