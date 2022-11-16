import { createContext, useState, useMemo } from "react";
import axios from "axios";
import { Company } from "../../types";
import { Proxy } from "../../Config/Proxy";
import { toast } from "react-toastify";
export const CompanyContext=createContext(null)
const CompanyContextProvider = ({ children }: any) => {
  const [companies, setCompanies] = useState<Company[] | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  // get all companies
  const getCompanies = async () => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/companies`).catch((err) => {
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
      setCompanies(res.data);
    }
  };
  
  const values: any = useMemo(
    () => ({
      getCompanies,
      companies,
      loading,
      empty,
    }),
    [
      getCompanies,
      companies,
      loading,
      empty,
    ]
  );
  return <CompanyContext.Provider value={values} >{children}</CompanyContext.Provider>
};
export default CompanyContextProvider;
