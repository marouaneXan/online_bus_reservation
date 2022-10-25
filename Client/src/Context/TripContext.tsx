import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { Proxy } from "../Config/Proxy";
export const TripContext = createContext(null);
interface Data {
  departure_city: string;
  arrival_city: string;
  departure_date: string;
}
const TripContextProvider = ({ children }: any) => {
  //Search for Trips available
  const searchTrips = async (data: Data) => {
    const res: any = await axios.get(`${Proxy}/trips?departure_city=${data.departure_city}&arrival_city=${data.arrival_city}&departure_date=${data.departure_date}`);
  };
  const values: any = useMemo(
    () => ({
      searchTrips,
    }),
    [searchTrips]
  );
  return <TripContext.Provider value={values}>{children}</TripContext.Provider>;
};
export default TripContextProvider;
