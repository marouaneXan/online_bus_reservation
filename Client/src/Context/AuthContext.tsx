import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Proxy from "../Config/Proxy";
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(localStorage.getItem("logged"));
  const [id, setId] = useState<string | null>(
    localStorage.getItem("client_id")
  );
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //Register for client

  const register = async (data: object) => {
    const res = await axios.post(Proxy + "clientAuth/register").catch((err) => {
      const message:string =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        setLoading(false);
        setError(message);
        setTimeout(() => {
          setError(null);
          setLoading(false);
        }, 4000);
      }
      if (res && res.data) {
        setLoading(false);
        setSuccess("Account created successfully");
        setTimeout(() => {
          setSuccess(null);
          navigate("/dashboard");
          // .cookie("access_token", generateToken(user.id, user.isAdmin), {
          //   httpOnly: true,
          // })
          
          
          setUser(localStorage.setItem("access_token", res.data.token));
          localStorage.setItem("logged", true);
          setConnected(true);
        }, 4000);
      }
    });
  };

  const values = useMemo(
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
    ]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
