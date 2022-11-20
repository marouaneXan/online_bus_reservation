import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Proxy} from "../../Config/Proxy";
import { toast } from 'react-toastify'
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [connected, setConnected] = useState<boolean>(
    localStorage.getItem("logged") ? true : false
  );
  const [id, setId] = useState<string | null>(
    localStorage.getItem("client_id")
  );
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  

  const login = async (data: object) => {
    setLoading(true);
    const res = await axios
      .post(Proxy+"/adminAuth/login", data)
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
      
      setLoading(false);
      toast.success(res.data.message)
      console.log(res)
      setTimeout(() => {
        navigate("/");
        localStorage.setItem("logged", true as any);
        localStorage.setItem("client_id", res.data.client);
        localStorage.setItem("token", res.data.token);
        setConnected(true);
      }, 5000);
    }
  };

  const values:any = useMemo(
    () => ({
      connected,
      setConnected,
      id,
      setId,
      loading,
      setLoading,
      success,
      setSuccess,
      error,
      setError,
      login
    }),
    [
      connected,
      setConnected,
      id,
      setId,
      loading,
      setLoading,
      success,
      setSuccess,
      error,
      setError,
      login
    ]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
