import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { TripState } from "../../types";
export const TripContext = createContext(null);
const TripContextProvider = ({ children }: any) => {
  const [trips, setTrips] = useState<TripState[]>();
  const [trip, setTrip] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const name = "marouane";
  const values: any = useMemo(() => {
    name;
  }, [name]);
  return <TripContext.Provider value={values}></TripContext.Provider>;
};
export default TripContextProvider;
