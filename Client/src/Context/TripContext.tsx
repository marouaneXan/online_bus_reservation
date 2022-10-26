import { createContext, useState, useMemo, useContext } from "react";
import axios from "axios";
import { Proxy } from "../Config/Proxy";
import { Tripe } from "../Types/Trip";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
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
  const { setError }: any = useContext(AuthContext);
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
          console.log(message.response.data.message);
          setLoading(false);
          setError(message.response.data.message);
          setTimeout(() => {
            setError(null);
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
        console.log(message.response.data.message);
        setError(message.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 4000);
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
