import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { TripContext } from "../Context/TripContext";
import { useContext } from "react";
import { token } from "../Config/Token";
const PrivateRoutes = () => {
    const {connected}:any=useContext(AuthContext)
    const {trips}:any=useContext(TripContext)
  return (connected || trips) ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
