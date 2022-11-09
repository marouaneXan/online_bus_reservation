import { createContext, useState, useMemo } from "react";
import axios from "axios";
export const TripContext = createContext(null);
const TripContextProvider = ({ children }: any) => {
  const name = "marouane";
  const values: any = useMemo(() => {
    name;
  }, [name]);
  return <TripContext.Provider value={values}></TripContext.Provider>;
};
export default TripContextProvider;
