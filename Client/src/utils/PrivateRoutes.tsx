import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
const PrivateRoutes = () => {
    const {connected}:any=useContext(AuthContext)
  return connected ? <Outlet /> : <Navigate to="/register" />;
};
export default PrivateRoutes;
