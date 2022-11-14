import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { Client } from "../../types";
import { Proxy } from "../../Config/Proxy";
import { toast } from "react-toastify";
export const ClientContext = createContext(null);
const ClientContextProvider = ({ children }: any) => {
  const [clients, setClients] = useState<Client[] | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  // get all companies
  const getClients = async () => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/clients`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        setLoading(false);
        setEmpty(message.response.data.message);
        setLoading(false);
      }
    });
    if (res && res.data) {
      setLoading(false);
      setClients(res.data);
    }
  };
  //delete Bus
  const deleteClient = async (client_id: string) => {
    const res = await axios.delete(`${Proxy}/clients/${client_id}`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        toast.error(message.response.data.message);
        setLoading(false);
      }
    });
    if (res && res.data) {
      getClients();
      toast.success(res.data.message);
    }
  };
  useEffect(() => {
    getClients();
  }, []);
  const values: any = useMemo(
    () => ({
      getClients,
      clients,
      loading,
      empty,
      deleteClient,
    }),
    [getClients, clients, loading, empty, deleteClient]
  );
  return (
    <ClientContext.Provider value={values}>{children}</ClientContext.Provider>
  );
};
export default ClientContextProvider;
