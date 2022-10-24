import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [connected, setConnected] = useState(localStorage.getItem("logged"));
  const [id, setId] = useState<string | null>(localStorage.getItem("client_id"));
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const name: string = "marouane";
  const values = { name };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
