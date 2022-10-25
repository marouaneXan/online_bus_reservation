import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Footer from "./Components/Layouts/Footer";
import AuthContextProvider from "./Context/AuthContext";
import TripContextProvider from "./Context/TripContext";
import Trips from "./Pages/Trips";

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
            </Routes>
            <Footer />
          </div>
        </TripContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
