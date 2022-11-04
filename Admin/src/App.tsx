import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Login from "./pages/Login";
import Sidebar from "./components/Layouts/Sidebar";
import Dashboard from "./pages/content/Dashboard";
import Trips from "./pages/content/Trips";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/trips"} element={<Trips />} />
          </Routes>
          <Sidebar />
        </div>
      </Router>
    </>
  );
}

export default App;
