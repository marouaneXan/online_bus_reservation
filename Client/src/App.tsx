import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Components/Layouts/Footer";
import AuthContextProvider from "./Context/AuthContext";
import TripContextProvider from "./Context/TripContext";
import Trips from "./Pages/Trips";
import Reservations from "./Pages/Reservations";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <TripContextProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/results_availabilities" element={<Trips />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
            <Footer />
          </div>
          <ToastContainer />
        </TripContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
