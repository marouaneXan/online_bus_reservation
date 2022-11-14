import { createContext, useState, useMemo,useEffect } from "react";
import axios from "axios";
import { Bus } from "../../types";
import { Proxy } from "../../Config/Proxy";
export const ReservationContext=createContext(null)
interface Statistic{
  today_money:number
  today_clients:number
  today_reservations:number
}
const ReservationContextProvider = ({ children }: any) => {
  const [reservations, setReservations] = useState<Bus[] | null>();
  const [statistics, setStatistics] = useState<Statistic | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  // get all Reservations
  const getReservation = async () => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/reservations`).catch((err) => {
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
      setReservations(res.data);
    }
  };

  //get statistic
  const statistic=async()=>{
    const res = await axios.get(`${Proxy}/reservations/statistics`)
    if (res && res.data) {
      setLoading(false);
      setStatistics(res.data);
    }
  }
  useEffect(() => {
    getReservation()
    statistic()
  }, [])
  
  const values: any = useMemo(
    () => ({
      getReservation,
      reservations,
      loading,
      empty,
      statistic,
      statistics
    }),
    [
      getReservation,
      reservations,
      loading,
      empty,
      statistic,
      statistics
    ]
  );
  return <ReservationContext.Provider value={values} >{children}</ReservationContext.Provider>
};
export default ReservationContextProvider;
