import { createContext, useState, useMemo,useEffect } from "react";
import axios from "axios";
import { Bus } from "../../types";
import { Proxy } from "../../Config/Proxy";
import { toast } from "react-toastify";
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

  //delete Reservation
  const deleteReservation = async (reservation_id: string,trip_id: string,client_id: string) => {
    const res = await axios.delete(`${Proxy}/reservations/${reservation_id}/${trip_id}/${client_id}`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        toast.error(message.response.data.message);
        setLoading(false);
      }
    });
    if (res && res.data) {
      getReservation();
      toast.success(res.data.message);
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
      statistics,
      deleteReservation
    }),
    [
      getReservation,
      reservations,
      loading,
      empty,
      statistic,
      statistics,
      deleteReservation
    ]
  );
  return <ReservationContext.Provider value={values} >{children}</ReservationContext.Provider>
};
export default ReservationContextProvider;
