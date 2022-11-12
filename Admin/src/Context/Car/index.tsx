import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { Bus } from "../../types";
import { Proxy } from "../../Config/Proxy";
export const BusContext=createContext(null)
const BusContextProvider = ({ children }: any) => {
  const [buses, setBuses] = useState<Bus[] | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  // get all buses
  const getBuses = async () => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/cars`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        setLoading(false);
        setEmpty(message.response.data.message);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }
    });
    if (res && res.data) {
      setLoading(false);
      setBuses(res.data);
    }
  };
  const values: any = useMemo(
    () => ({
      getBuses,
      buses,
      loading,
      empty
    }),
    [
      getBuses,
      buses,
      loading,
      empty
    ]
  );
  return <BusContext.Provider value={values} >{children}</BusContext.Provider>
};
export default BusContextProvider;
