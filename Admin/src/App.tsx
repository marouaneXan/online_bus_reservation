import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Login from "./pages/Login";
import Sidebar from "./components/Layouts/Sidebar";
import Content from "./pages/content/Content";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Content />} />
          </Routes>
          <Sidebar />
        </div>
      </Router>
    </>
  );
}

export default App;
