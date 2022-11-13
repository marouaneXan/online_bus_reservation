import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { Bus } from "../../types";
import { Proxy } from "../../Config/Proxy";
import { toast } from "react-toastify";
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
  //delete Bus
  const deleteBus = async (bus_id: string) => {
    const res = await axios.delete(`${Proxy}/cars/${bus_id}`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        toast.error(message.response.data.message);
        setLoading(false);
      }
    });
    if (res && res.data) {
      getBuses();
      toast.success(res.data.message);
    }
  };
  const values: any = useMemo(
    () => ({
      getBuses,
      buses,
      loading,
      empty,
      deleteBus
    }),
    [
      getBuses,
      buses,
      loading,
      empty,
      deleteBus
    ]
  );
  return <BusContext.Provider value={values} >{children}</BusContext.Provider>
};
export default BusContextProvider;
