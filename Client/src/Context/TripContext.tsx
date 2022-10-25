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
  const { setSuccess, setError, setLoading }: any = useContext(AuthContext);
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
      setLoading(false);
      setTimeout(() => {
        setSuccess(null);
        navigate("/results_availabilities");
        setTrips(res.data);
      },4000);
    }
  };
  const values: any = useMemo(
    () => ({
      trips,
      searchTrips,
    }),
    [searchTrips, trips]
  );
  return <TripContext.Provider value={values}>{children}</TripContext.Provider>;
};
export default TripContextProvider;
