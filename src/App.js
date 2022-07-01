import React from "react";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
function App() {
  return (
    <Router>
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logIn">LogIn</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
