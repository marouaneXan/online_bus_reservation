import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Login from "./pages/Login";
import Sidebar from "./components/Layouts/Sidebar";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Sidebar/>
      </div>
      </Router>
    </>
  );
}

export default App;
