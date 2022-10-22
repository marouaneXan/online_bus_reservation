import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Footer from "./Components/Layouts/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
