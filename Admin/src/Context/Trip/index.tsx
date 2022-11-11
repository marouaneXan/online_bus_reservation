import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { TripState } from "../../types";
import { toast } from "react-toastify";
import { Proxy } from "../../Config/Proxy";
export const TripContext = createContext(null);
const TripContextProvider = ({ children }: any) => {
  const [trips, setTrips] = useState<TripState[] | null>();
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [trip, setTrip] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  //Close modal delete
  const closeModalDelete = () => {
    setShowModalDelete(false);
  };
  //show modal delete
  const displayModalDelete = () => {
    setShowModalDelete(true);
  };
  //Close modal Add
  const closeModalAdd = () => {
    setShowModalAdd(false);
  };
  //show modal Add
  const displayModalAdd = () => {
    setShowModalDelete(true);
  };
  // get all trips
  const getTrips = async () => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/trips/all`).catch((err) => {
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
      setTrips(res.data);
    }
  };

  //delete trip
  const deleteTrip = async (trip_id: string) => {
    // setLoading(true);
    const res = await axios.delete(`${Proxy}/trips/${trip_id}`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        // setLoading(false);
        toast.error(message.response.data.message);
        setLoading(false);
      }
    });
    if (res && res.data) {
      setShowModalDelete(false);
      // setLoading(false);
      getTrips();
      toast.success(res.data.message);
    }
  };
  const values: any = useMemo(
    () => ({
      getTrips,
      deleteTrip,
      trips,
      loading,
      showModalDelete,
      closeModalDelete,
      displayModalDelete,
      empty,
      closeModalAdd,
      displayModalAdd,
      showModalAdd
    }),
    [
      getTrips,
      trips,
      deleteTrip,
      loading,
      showModalDelete,
      closeModalDelete,
      displayModalDelete,
      empty,
      closeModalAdd,
      displayModalAdd,
      showModalAdd
    ]
  );
  return <TripContext.Provider value={values}>{children}</TripContext.Provider>;
};
export default TripContextProvider;
