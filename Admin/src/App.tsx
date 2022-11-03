import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
