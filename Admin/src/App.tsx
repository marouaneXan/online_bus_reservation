import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Login from "./pages/Login";
import Sidebar from "./components/Layouts/Sidebar";
import Dashboard from "./pages/content/Dashboard";
import Trips from "./pages/content/Trips";
import Clients from "./pages/content/Clients";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reservations from "./pages/content/Reservations";
import Buses from "./pages/content/Buses";
import Companies from "./pages/content/Companies";
import TripContextProvider from "./Context/Trip";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <TripContextProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path={"/"} element={<Dashboard />} />
              <Route path={"/trips"} element={<Trips />} />
              <Route path={"/clients"} element={<Clients />} />
              <Route path={"/reservations"} element={<Reservations />} />
              <Route path={"/buses"} element={<Buses />} />
              <Route path={"/companies"} element={<Companies />} />
              <Route path={"*"} element={<NotFound />} />
            </Routes>
            <Sidebar />
          </div>
          <ToastContainer />
        </TripContextProvider>
      </Router>
    </>
  );
}

export default App;
