import { createContext, useState, useMemo, useContext } from "react";
import axios from "axios";
import { Proxy } from "../Config/Proxy";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const TripContext = createContext(null);
interface Data {
  departure_city: string;
  arrival_city: string;
  departure_date: string;
}
const TripContextProvider = ({ children }: any) => {
  const [trips, setTrips] = useState<[]>();
  const [trip, setTrip] = useState<[]>();
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState<[]>();
  const [error, setError] = useState<string | null>();

  const navigate = useNavigate();

  //Search for Trips available
  const searchTrips = async (data: Data) => {
    setLoading(true);
    const res = await axios
      .get(
        `${Proxy}/trips?departure_city=${data.departure_city}&arrival_city=${data.arrival_city}&departure_date=${data.departure_date}`
      )
      .catch((err) => {
        const message: any =
          (err.res && err.res.data && err.res.data.message) ||
          err ||
          err.message;
        if (message) {
          setLoading(false);
          toast.error(message.response.data.message);
          setTimeout(() => {
            setLoading(false);
          }, 4000);
        }
      });
    if (res && res.data) {
      setTimeout(() => {
        setLoading(false);
        setTrips(res.data);
        navigate("/results_availabilities");
      }, 2000);
    }
  };

  //Search for Trips available
  const makeReservation = async (trip_id: string, client_id: string) => {
    const res: object | any = await axios
      .post(`${Proxy}/reservations/${trip_id}/${client_id}`)
      .catch((err) => {
        const message: any =
          (err.res && err.res.data && err.res.data.message) ||
          err ||
          err.message;
        if (message) {
          setLoading(false);
          console.log(message);
          toast.error(message.response.data.message);
            setLoading(false);
        }
      });
    if (res && res.data) {
      toast.success(res.data.message);
    }
  };

  //get Trip by id
  const getTripDetails = async (trip_id: string) => {
    const res = await axios.get(`${Proxy}/trips/${trip_id}`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        toast.error(message.response.data.message);
      }
    });
    if (res && res.data) {
      setLoading(false);
      setTrip(res.data);
    }
  };

  //Get all reservations for client
  const getClientReservations = async (client_id: string) => {
    setLoading(true);
    const res = await axios
      .get(`${Proxy}/reservations/${client_id}`)
      .catch((err) => {
        const message: any =
          (err.res && err.res.data && err.res.data.message) ||
          err ||
          err.message;
        if (message) {
          setLoading(false);
          setError(message.response.data.message);
          setLoading(false);
        }
      });
    if (res && res.data) {
      setError(null);
      setLoading(false);
      setReservations(res.data);
    }
  };

  //Cancel reservations
  const cancelReservation = async (
    reservation_id: string,
    trip_id: string,
    client_id: string
  ) => {
    setLoading(true);
    const res = await axios
      .delete(`${Proxy}/reservations/${reservation_id}/${trip_id}/${client_id}`)
      .catch((err) => {
        const message: any =
          (err.res && err.res.data && err.res.data.message) ||
          err ||
          err.message;
        if (message) {
          setLoading(false);
          toast.error(message.response.data.message);
            setLoading(false);
        }
      });
    if (res && res.data) {
      setLoading(false);
      getClientReservations(client_id);
      toast.success(res.data.message);
    }
  };
  const values: any = useMemo(
    () => ({
      error,
      loading,
      makeReservation,
      getClientReservations,
      cancelReservation,
      trips,
      reservations,
      trip,
      searchTrips,
      getTripDetails,
    }),
    [
      searchTrips,
      error,
      cancelReservation,
      getClientReservations,
      reservations,
      makeReservation,
      loading,
      trips,
      trip,
      getTripDetails,
    ]
  );
  return <TripContext.Provider value={values}>{children}</TripContext.Provider>;
};
export default TripContextProvider;
