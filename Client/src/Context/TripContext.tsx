import { createContext, useState, useMemo, useContext } from "react";
import axios from "axios";
import { Proxy } from "../Config/Proxy";
import { toast } from 'react-toastify'
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

  //Search for Trips available
  const navigate = useNavigate();
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
          toast.error(message.response.data.message)
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
      }, 4000);
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
  const values: any = useMemo(
    () => ({
      loading,
      trips,
      trip,
      searchTrips,
      getTripDetails,
    }),
    [searchTrips, loading, trips, trip, getTripDetails]
  );
  return <TripContext.Provider value={values}>{children}</TripContext.Provider>;
};
export default TripContextProvider;
